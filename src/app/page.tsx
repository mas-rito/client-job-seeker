import { Container } from "@/components/atoms/container";
import { CategoriesSection } from "@/components/organisms/categoriesSection";
import { ClientsSection } from "@/components/organisms/clientsSection";
import { HeroSection } from "@/components/organisms/heroSection";

export default function Home() {
  return (
    <Container className="mb-10">
      <HeroSection />
      <div className="space-y-32">
        <ClientsSection />
        <CategoriesSection />
      </div>
    </Container>
  );
}
