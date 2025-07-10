import { FC } from "react";
import { getBlog } from "../_api/get-blog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";

interface BlogHeaderProps {
  objectId: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="space-y-2 py-2">
      <Badge variant="outline" className="bg-sky-100 text-sky-800 capitalize ">
        {blog.category}
      </Badge>
      <h1 className="text-4xl text-sky-800 font-bold">{blog.title}</h1>

      <p className="font-extralight">
        {format(new Date(blog.created), "dd MMM yyyy")}
      </p>

      <div className="relative w-full h-[360px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          className="object-cover rounded-lg"
          fill
        />
      </div>
    </section>
  );
};

export default BlogHeader;
