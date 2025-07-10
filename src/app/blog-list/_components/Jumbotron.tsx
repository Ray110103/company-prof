import { Input } from "@/components/ui/input";

const Jumbotron = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center rounded-xl py-16 px-6 shadow-sm">
      <h1 className="text-5xl font-bold text-sky-800">CleanGo Blog</h1>
      <p className="text-sky-700 mt-2 text-lg">
        Cleaning tips, home hygiene guides, and service updates from our expert team.
      </p>

      <div className="mt-6 w-full max-w-md">
        <Input
          type="text"
          placeholder="Search cleaning tips..."
          className="w-full border border-sky-200 focus-visible:ring-sky-500"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
