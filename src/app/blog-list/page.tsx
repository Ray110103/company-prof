import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";

export default function Home() {
  return (
    <main className="bg-white text-sky-900 py-16 px-12 ">
      <div className="max-w-[1000px] mx-auto">
        <Jumbotron />
        <div className="h-px bg-sky-200 my-12" />
        <BlogList />
      </div>
    </main>
  );
}
