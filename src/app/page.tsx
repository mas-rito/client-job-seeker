import { Container } from "@/components/atoms/container";
import { BannerStart } from "@/components/organisms/bannerStart";
import { CategoriesSection } from "@/components/organisms/categoriesSection";
import { ClientsSection } from "@/components/organisms/clientsSection";
import { FeaturedJobsSection } from "@/components/organisms/featuredJobsSection";
import { HeroSection } from "@/components/organisms/heroSection";

export default function Home() {
  return (
    <Container className="mb-10">
      <HeroSection />
      <div className="space-y-32">
        <ClientsSection />
        <CategoriesSection />
        <BannerStart />
        <FeaturedJobsSection />
      </div>
    </Container>
  );
}
