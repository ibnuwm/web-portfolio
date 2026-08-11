import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import FAQ from "./components/homepage/faq";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import TeamSection from "./components/homepage/team";
import TestimonialsSection from "./components/homepage/testimonials";
import PricingSection from "./components/homepage/pricing";
import VideoPortfolio from "./components/homepage/video-portfolio";
import WorkProcess from "./components/homepage/work-process";
import WhatsAppFloat from "./components/homepage/whats-app-float";

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.warn(`dev.to API returned ${res.status}, using empty blog list`);
      return [];
    }

    const data = await res.json();
    return data
      .filter((item) => item?.cover_image)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  } catch (error) {
    console.warn('Failed to fetch blogs from dev.to, using empty list:', error.message);
    return [];
  }
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <WorkProcess />
      <VideoPortfolio />
      <Education />
      <Blog blogs={blogs} />
      <FAQ />
      <ContactSection />
      <WhatsAppFloat />
    </div>
  )
};