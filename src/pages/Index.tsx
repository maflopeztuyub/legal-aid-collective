import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { UserTypes } from "@/components/UserTypes";
import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import SimpleLegalChat from "@/components/SimpleLegalChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <UserTypes />
      <Features />
      <Newsletter />
      <Footer />
      <SimpleLegalChat />
    </div>
  );
};

export default Index;