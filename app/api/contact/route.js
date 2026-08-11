import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const GMAIL_PASSKEY = process.env.GMAIL_PASSKEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const transporter =
  EMAIL_ADDRESS && GMAIL_PASSKEY
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_ADDRESS,
          pass: GMAIL_PASSKEY,
        },
      })
    : null;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateStore = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || now - entry.startedAt > RATE_WINDOW_MS) {
    rateStore.set(ip, { count: 1, startedAt: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeSubject(value) {
  return String(value ?? "").replace(/[\r\n]/g, " ").trim();
}

function validatePayload(payload) {
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload?.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 100) {
    return { error: "Nama wajib diisi (maksimal 100 karakter)." };
  }
  if (!email || email.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Alamat email tidak valid." };
  }
  if (!message || message.length > 2000) {
    return { error: "Pesan wajib diisi (maksimal 2000 karakter)." };
  }
  return { value: { name, email, message } };
}

async function verifyRecaptcha(token) {
  if (!RECAPTCHA_SECRET_KEY) return true;
  if (!token) return false;
  try {
    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token }),
      { timeout: 10000 }
    );
    return res.data?.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error.message);
    return false;
  }
}

async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const res = await axios.post(
      url,
      { text: message, chat_id: TELEGRAM_CHAT_ID },
      { timeout: 10000 }
    );
    return res.data.ok === true;
  } catch (error) {
    console.error("Error sending Telegram message:", error.response?.data || error.message);
    return false;
  }
}

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">Pesan Baru Diterima</h2>
      <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Pesan:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${escapeHtml(userMessage).replace(/\n/g, "<br/>")}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Balas email ini untuk merespons pengirim.</p>
    </div>
  </div>
`;

async function sendEmail({ name, email, message }) {
  if (!transporter) return false;

  const mailOptions = {
    from: EMAIL_ADDRESS,
    to: EMAIL_ADDRESS,
    subject: `Pesan Baru dari ${sanitizeSubject(name)}`,
    text: message,
    html: generateEmailTemplate(name, email, message),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error while sending email:", error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.",
        },
        { status: 429 }
      );
    }

    const payload = await request.json();
    const validation = validatePayload(payload);
    if (validation.error) {
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    const captchaOk = await verifyRecaptcha(payload.recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { success: false, message: "Verifikasi keamanan gagal. Silakan coba lagi." },
        { status: 403 }
      );
    }

    if (!TELEGRAM_BOT_TOKEN && !transporter) {
      return NextResponse.json(
        { success: false, message: "Saluran notifikasi belum dikonfigurasi." },
        { status: 503 }
      );
    }

    const { name, email, message } = validation.value;
    const text = `Pesan baru dari ${name}\n\nEmail: ${email}\n\nPesan:\n\n${message}\n\n`;

    const results = await Promise.all([
      TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID
        ? sendTelegramMessage(text)
        : Promise.resolve(false),
      sendEmail({ name, email, message }),
    ]);

    const delivered = results.some(Boolean);
    return NextResponse.json(
      {
        success: delivered,
        message: delivered
          ? "Pesan berhasil terkirim. Terima kasih!"
          : "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.",
      },
      { status: delivered ? 200 : 500 }
    );
  } catch (error) {
    console.error("Contact API Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
