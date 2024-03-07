import { Container } from "@/components/atoms/container";
import { BannerStart } from "@/components/organisms/bannerStart";
import { CategoriesSection } from "@/components/organisms/categoriesSection";
import { ClientsSection } from "@/components/organisms/clientsSection";
import { FeaturedJobsSection } from "@/components/organisms/featuredJobsSection";
import { HeroSection } from "@/components/organisms/heroSection";
import { LatestJobsSection } from "@/components/organisms/latestJobsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 right-0 w-2/3 h-screen -z-10">
        <Image src="/images/pattern.png" alt="Background" fill />
      </div>
      <Container className="mb-10">
        <HeroSection />
        <div className="space-y-32">
          <ClientsSection />
          <CategoriesSection />
          <BannerStart />
          <FeaturedJobsSection />
          <LatestJobsSection />
        </div>
      </Container>
    </>
  );
}
