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

const subscribedEmails = new Set();

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

async function sendWelcomeEmail(email) {
  if (!transporter) return false;
  try {
    await transporter.sendMail({
      from: EMAIL_ADDRESS,
      to: email,
      subject: "Terima kasih berlangganan Ibnu WM",
      text:
        "Halo,\n\nTerima kasih sudah berlangganan! Anda akan menerima update project, " +
        "tutorial, dan insight teknis terbaru dari Ibnu WM.\n\nSalam,\nIbnu WM",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
            <h2 style="color: #6366F1;">Terima kasih sudah berlangganan!</h2>
            <p>Anda akan menerima update project, tutorial, dan insight teknis terbaru dari Ibnu WM.</p>
            <p style="font-size: 12px; color: #888;">Salam,<br/>Ibnu WM</p>
          </div>
        </div>`,
    });
    return true;
  } catch (error) {
    console.error("Error sending welcome email:", error.message);
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
    const email =
      typeof payload?.email === "string" ? payload.email.trim().toLowerCase() : "";

    if (!email || email.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Alamat email tidak valid." },
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

    const alreadySubscribed = subscribedEmails.has(email);
    subscribedEmails.add(email);

    const telegramResult =
      TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID
        ? await sendTelegramMessage(
            `📬 Newsletter baru: ${email}${alreadySubscribed ? " (duplikat)" : ""}`
          )
        : false;
    const emailResult = alreadySubscribed ? true : await sendWelcomeEmail(email);

    const delivered = telegramResult || emailResult;
    if (!delivered) {
      return NextResponse.json(
        { success: false, message: "Gagal memproses langganan. Silakan coba lagi." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: alreadySubscribed
          ? "Email Anda sudah terdaftar sebelumnya. Terima kasih!"
          : "Berhasil! Silakan cek email Anda untuk konfirmasi update terbaru.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
