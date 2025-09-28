import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { UserTypes } from "@/components/UserTypes";
import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
<<<<<<< HEAD
import FloatingChat from "@/components/FloatingChat";
=======
>>>>>>> e20983ed7d084f47d5b1779ce59c760720b92794
import { Footer } from "@/components/Footer";
import SimpleLegalChat from "@/components/SimpleLegalChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <UserTypes />
      <Features />
<<<<<<< HEAD
  <Newsletter />
      <FloatingChat />
=======
      <Newsletter />
>>>>>>> e20983ed7d084f47d5b1779ce59c760720b92794
      <Footer />
      <SimpleLegalChat />
    </div>
  );
};

export default Index;