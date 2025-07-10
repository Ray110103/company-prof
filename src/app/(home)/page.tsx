import { Montserrat } from "next/font/google";
import CompanyOverview from "./_components/CompanyOverview";
import CompanyTagline from "./_components/CompanyTagline";
import CompantTagline from "./_components/CompanyTagline";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Testimonials from "./_components/Testimonials";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Hero />
      <CompanyOverview />
      <Products />
      <Testimonials />
      <CompanyTagline />
    </main>
  );
}
