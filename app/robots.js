export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ibnuwm.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
