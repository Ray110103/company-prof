import Loading from "@/components/Loading";
import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


const BlogDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;

  return (
    <main className={`container mx-auto px-4 md:px-4 lg:px-16 pb-20 sm-px6 ${montserrat.className}`}>
      <Suspense fallback={<Loading />}>
        <BlogHeader objectId={objectId} />
        <BlogBody objectId={objectId} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
