import CompanyOverview from "./_components/CompanyOverview";
import CompanyTagline from "./_components/CompanyTagline";
import CompantTagline from "./_components/CompanyTagline";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <CompanyOverview />
      <Products />
      <Testimonials />
      <CompanyTagline />
    </main>
  );
}
