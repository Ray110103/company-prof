import { Montserrat } from "next/font/google";
import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


export default function Home() {
  return (
    <main className={`bg-white text-sky-900 py-16 px-12 ${montserrat.className}`} >
      <div className="max-w-[1000px] mx-auto">
        <Jumbotron />
        <div className="h-px bg-sky-200 my-12" />
        <BlogList />
      </div>
    </main>
  );
}
