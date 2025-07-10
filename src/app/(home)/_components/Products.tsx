import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <section className="container mx-auto px-4 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-sky-800">
          Our Cleaning Services
        </h2>
        <p className="text-sky-600 mt-2 max-w-xl mx-auto">
          We offer professional cleaning solutions to keep your home, office,
          and space sparkling clean and germ-free.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* House Cleaning */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="house-cleaning.jpg"
            alt="House Cleaning"
            width={500}
            height={300}
            className="rounded-md mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            House Cleaning
          </h3>
          <p className="text-sky-600 text-sm">
            Regular or deep cleaning for bedrooms, kitchens, bathrooms, and
            more.
          </p>
        </div>

        {/* Office Cleaning */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="office.webp"
            alt="Office Cleaning"
            width={500}
            height={300}
            className="rounded-md mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            Office Cleaning
          </h3>
          <p className="text-sky-600 text-sm">
            Clean, safe, and sanitized workspaces to boost productivity and
            health.
          </p>
        </div>

        {/* Sofa / Carpet Cleaning */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="sofa.jpg"
            alt="Sofa and Carpet Cleaning"
            width={500}
            height={300}
            className="rounded-md mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            Sofa & Carpet Cleaning
          </h3>
          <p className="text-sky-600 text-sm">
            Deep steam cleaning for upholstery and rugs using safe chemicals.
          </p>
        </div>
      </div>

      {/* ✅ Centered Button */}
      <div className="flex justify-center">
        <Link href="/products">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 text-sm rounded-md">
            More Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
