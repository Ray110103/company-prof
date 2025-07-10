"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Wrench } from "lucide-react";
import * as Yup from "yup";
import useRegister from "./_hooks/useRegister";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const SignUp = () => {
  const { mutateAsync: register, isPending } = useRegister();

  return (
    <main className={`container mx-auto px-4 text-sky-900 ${montserrat.className}`}>
      <Card className="w-full max-w-sm mx-auto mt-24 shadow-md border border-sky-100">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await register(values);
          }}
        >
          <Form className="space-y-4">
            <CardHeader>
              <CardTitle className="text-sky-800 text-xl">
                Register to your account
              </CardTitle>
              <CardDescription className="text-sky-600 text-sm">
                Enter your data below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {/* NAME */}
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-sky-700">
                    Name
                  </Label>
                  <Field
                    name="name"
                    as={Input}
                    type="text"
                    placeholder="Your name"
                    className="bg-white border border-sky-200 focus:ring-sky-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* EMAIL */}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sky-700">
                    Email
                  </Label>
                  <Field
                    name="email"
                    as={Input}
                    type="email"
                    placeholder="Your email"
                    className="bg-white border border-sky-200 focus:ring-sky-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* PASSWORD */}
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-sky-700">
                    Password
                  </Label>
                  <Field
                    name="password"
                    as={Input}
                    type="password"
                    placeholder="Your password"
                    className="bg-white border border-sky-200 focus:ring-sky-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full bg-sky-700 hover:bg-sky-800 text-white"
                disabled={isPending}
              >
                {isPending ? <Wrench className="animate-spin" /> : "Register"}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignUp;
