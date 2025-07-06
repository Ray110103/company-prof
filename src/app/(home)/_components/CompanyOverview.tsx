import React from "react";

const CompanyOverview = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="cleaning-service.jpeg" // make sure this exists
            alt="Our cleaning team in action"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            About CleanGo
          </h2>
          <p className="text-sky-700 leading-relaxed mb-4">
            At <strong>CleanGo</strong>, we believe that a clean space is a happy space. Founded in 2018, we've helped hundreds of families and businesses maintain spotless homes and productive workplaces.
          </p>
          <p className="text-sky-700 leading-relaxed mb-4">
            Our highly trained team uses eco-friendly products and industry-standard techniques to ensure top-notch hygiene and safety. Whether it’s a one-time deep clean or regular maintenance, we’re here to help.
          </p>
          <ul className="text-sky-700 list-disc list-inside mt-4">
            <li>✅ Trusted by 500+ customers</li>
            <li>✅ 100% eco-friendly & pet-safe products</li>
            <li>✅ Punctual, professional, and background-checked staff</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
