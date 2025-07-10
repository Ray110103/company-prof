"use client";

import TiptapRichtextEditor from "@/components/TiptapRichtextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Trash } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import useCreateBlog from "./_hooks/useCreateBlog";
import { AuthGuard } from "@/hoc/AuthGuard";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});

const Write = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const onChangeThumbnail = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const files = e.target.files;
    if (files && files.length) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setFieldValue("thumbnail", files[0]);
    }
  };

  const removeThumbnail = (setFieldValue: (field: string, value: any) => void) => {
    setSelectedImage("");
    setFieldValue("thumbnail", null);
  };

  const { mutateAsync: createBlog, isPending } = useCreateBlog();

  return (
    <main className={`container mx-auto px-4 pb-20 pt-16 text-sky-900 ${montserrat.className}`}>
      <section className="max-w-3xl mx-auto bg-white shadow-sm border border-sky-100 rounded-lg p-6 md:p-10 space-y-6">
        <h1 className="text-3xl font-bold text-sky-800 mb-4 text-center">Write a New Blog</h1>

        <Formik
          initialValues={{
            title: "",
            description: "",
            content: "",
            category: "",
            thumbnail: null,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await createBlog(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6">
              {/* TITLE */}
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Field
                  name="title"
                  as={Input}
                  type="text"
                  placeholder="Title"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* CATEGORY */}
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Field
                  name="category"
                  as={Input}
                  type="text"
                  placeholder="Category"
                />
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Field
                  name="description"
                  as={Textarea}
                  placeholder="Short summary..."
                  style={{ resize: "none" }}
                />
                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* CONTENT */}
              <TiptapRichtextEditor label="Content" name="content" />

              {/* THUMBNAIL */}
              {selectedImage ? (
                <div className="relative w-fit">
                  <Image
                    src={selectedImage}
                    alt="thumbnail"
                    width={300}
                    height={250}
                    className="rounded-md object-cover border shadow"
                  />
                  <Button
                    size="icon"
                    className="absolute -top-2 -right-2 rounded-full bg-red-500"
                    onClick={() => removeThumbnail(setFieldValue)}
                  >
                    <Trash className="text-white" />
                  </Button>
                </div>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="thumbnail">Thumbnail</Label>
                  <Input
                    name="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChangeThumbnail(e, setFieldValue)}
                  />
                  <ErrorMessage
                    name="thumbnail"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              )}

              <div className="flex justify-end">
                <Button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white" disabled={isPending}>
                  {isPending ? "Loading..." : "Submit"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default AuthGuard(Write);
