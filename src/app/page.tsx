import { Container } from "@/components/atoms/container";
import { ClientsSection } from "@/components/organisms/clientsSection";
import { HeroSection } from "@/components/organisms/heroSection";

export default function Home() {
  return (
    <Container className="mb-10">
      <HeroSection />
      <ClientsSection />
    </Container>
  );
}
