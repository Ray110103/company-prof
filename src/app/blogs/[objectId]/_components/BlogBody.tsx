import { FC } from "react";
import { getBlog } from "../_api/get-blog";
import Markdown from "@/components/Markdown";

interface BlogBodyProps {
  objectId: string;
}

const BlogBody: FC<BlogBodyProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="mt-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto prose prose-sky prose-img:rounded-lg prose-headings:text-sky-800 prose-p:text-sky-700 prose-a:text-sky-600">
        <Markdown content={blog.content} />
      </div>
    </section>
  );
};

export default BlogBody;
