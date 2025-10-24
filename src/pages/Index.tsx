import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Offers from '@/sections/Offers';
import WhySabia from '@/sections/WhySabia';
import SocialProof from '@/sections/SocialProof';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Offers />
      <WhySabia />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
