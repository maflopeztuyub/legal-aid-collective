import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { UserTypes } from "@/components/UserTypes";
import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import FloatingChat from "@/components/FloatingChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <UserTypes />
      <Features />
  <Newsletter />
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default Index;