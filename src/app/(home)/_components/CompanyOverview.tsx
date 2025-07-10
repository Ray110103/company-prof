import React from "react";

const CompanyOverview = () => {
  return (
    <section className="container mx-auto bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/cleaning-service.jpeg" 
            alt="Our cleaning team in action"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-4">
            About CleanGo
          </h2>
          <p className="text-sky-700 leading-relaxed mb-4 text-sm sm:text-base">
            At <strong>CleanGo</strong>, we believe that a clean space is a
            happy space. Founded in 2018, we've helped hundreds of families and
            businesses maintain spotless homes and productive workplaces.
          </p>
          <p className="text-sky-700 leading-relaxed mb-4 text-sm sm:text-base">
            Our highly trained team uses eco-friendly products and
            industry-standard techniques to ensure top-notch hygiene and safety.
            Whether it’s a one-time deep clean or regular maintenance, we’re
            here to help.
          </p>
          <ul className="text-sky-700 mt-4 text-sm sm:text-base">
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
