import Navbar from '@/components/Navbar';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Cases from '@/sections/Cases';
import Process from '@/sections/Process';
import Stack from '@/sections/Stack';
import SocialProof from '@/sections/SocialProof';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Process />
        <Stack />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
