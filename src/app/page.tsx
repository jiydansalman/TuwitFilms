import About from "@/components/About";
import CustomerCursor from "@/components/customercursor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Marquee from "@/components/marque";
import Portofolio from "@/components/portofolio";
import Pricelist from "@/components/pricelist";

export default function Home() {
  return (
    <main>
      <CustomerCursor />
      <Header />
      <Hero />
      <Marquee />
      <Portofolio />
      <About />
      <Pricelist />
      <Footer />
    </main>
  );
}