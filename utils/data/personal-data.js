const env = (key, fallback) => {
  const value = process.env[key];
  return value && value.length > 0 ? value : fallback;
};

export const personalData = {
  name: "IBNU WM",
  profile: "/profile.png",
  designation: "Software Developer & AI Automation Specialist",
  description:
    "Saya adalah Software Developer yang berspesialisasi dalam AI Automation, Web Development, dan Digital Solution untuk UMKM Indonesia. Membangun sistem otomatisasi bisnis, chatbot AI, dan aplikasi web yang membantu bisnis berkembang. Tersedia untuk project freelance, konsultasi teknis, dan partnership jangka panjang.",
  email: env("NEXT_PUBLIC_EMAIL", "ibnuwm@example.com"),
  phone: env("NEXT_PUBLIC_PHONE", "+62 812-3456-7890"),
  whatsapp: env("NEXT_PUBLIC_WHATSAPP", "+6281234567890"),
  address: env("NEXT_PUBLIC_ADDRESS", "Jakarta Selatan, DKI Jakarta, Indonesia"),
  github: "https://github.com/ibnuwm",
  linkedIn: "https://linkedin.com/in/ibnuwm",
  twitter: "https://twitter.com/ibnuwm",
  instagram: "https://instagram.com/ibnuwm",
  youtube: "https://youtube.com/@ibnuwm",
  facebook: "https://facebook.com/ibnuwm",
  stackOverflow: "https://stackoverflow.com/users/ibnuwm",
  resume: env("NEXT_PUBLIC_RESUME_URL", ""),
  devUsername: "ibnuwm",
  officeAddress: env(
    "NEXT_PUBLIC_OFFICE_ADDRESS",
    "Jakarta Selatan, DKI Jakarta, Indonesia"
  ),
  officeHours: env(
    "NEXT_PUBLIC_OFFICE_HOURS",
    "Senin - Jumat: 09:00 - 18:00 WIB"
  ),
  googleMapsUrl: "https://maps.google.com/?q=Jakarta+Selatan",
  whatsappMessage:
    "Halo, saya tertarik dengan layanan development Anda. Bisa diskusikan project saya?",
};
