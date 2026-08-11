export const dynamic = "force-static";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ibnuwm.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
