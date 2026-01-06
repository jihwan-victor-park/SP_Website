import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Founders />
      <Services />
      <Footer />
    </main>
  );
}
