import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { AnimatedLinesBg } from "@/components/ui/AnimatedLinesBg";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--c-bg)", color: "var(--c-fg)" }}>
      {/* Full-page river background — scrolls with content so every section sees a different stretch of the river */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <AnimatedLinesBg className="w-full h-full bg-lines-pulse" />
      </div>

      {/* All content above background */}
      <div className="relative" style={{ zIndex: 1 }}>
        <NavBar />
        <FadeIn><HeroSection /></FadeIn>
        <FadeIn><ExpertiseSection /></FadeIn>
        <FadeIn><ProjectsSection /></FadeIn>
        <FadeIn><ExperienceSection /></FadeIn>
        <FadeIn><ToolkitSection /></FadeIn>
        <FadeIn><CtaSection /></FadeIn>
        <FadeIn><FooterSection /></FadeIn>
      </div>
    </main>
  );
}

