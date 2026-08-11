"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Masukkan alamat email yang valid.");
      return;
    }

    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      toast.error("Harap selesaikan verifikasi keamanan (reCAPTCHA) terlebih dahulu.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL || ""}/api/newsletter`,
        { email, recaptchaToken: captchaToken }
      );
      toast.success(res.data.message || "Berhasil berlangganan!");
      setEmail("");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Gagal berlangganan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Anda"
            aria-label="Alamat email untuk newsletter"
            className="flex-1 min-w-0 rounded-xl bg-[#1a1443] border border-[#353a52] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#16f2b3] outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            aria-label="Berlangganan newsletter"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white hover:from-violet-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? <span className="text-xs">...</span> : <FaPaperPlane size={14} />}
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </div>
        {RECAPTCHA_SITE_KEY && (
          <div className="flex justify-center scale-90 origin-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              hl="id"
            />
          </div>
        )}
      </div>
    </form>
  );
}

export default NewsletterForm;
