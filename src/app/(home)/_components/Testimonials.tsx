import React from "react";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-sky-800">
          What Our Clients Say
        </h2>
        <p className="text-sky-600 mt-2 max-w-xl mx-auto">
          Trusted by families and businesses alike, our services speak for
          themselves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “CleanGo did an amazing job on our apartment. Everything smells
            fresh and looks spotless. Highly recommend!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="80.jpg"
              alt="Client 1"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Sarah Johnson</p>
              <p className="text-sm text-sky-600">Homeowner, Jakarta</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “Our office looks brand new every week thanks to CleanGo. Their team
            is professional and always on time.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="26.jpg"
              alt="Client 2"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Budi Santoso</p>
              <p className="text-sm text-sky-600">Office Manager, Surabaya</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “They cleaned our carpets and windows perfectly. Friendly service
            and affordable prices.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="8.jpg"
              alt="Client 3"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Dewi Lestari</p>
              <p className="text-sm text-sky-600">Entrepreneur, Bandung</p>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “We've tried other services but CleanGo is by far the most reliable
            and detail-oriented.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="53.jpg"
              alt="Client 4"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Agus Wijaya</p>
              <p className="text-sm text-sky-600">Restaurant Owner, Semarang</p>
            </div>
          </div>
        </div>

        {/* Testimonial 5 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “Having kids means messes everywhere—CleanGo saves my sanity every
            week!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="2.jpg"
              alt="Client 5"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Rina Amelia</p>
              <p className="text-sm text-sky-600">Mom of 3, Bekasi</p>
            </div>
          </div>
        </div>

        {/* Testimonial 6 */}
        <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <p className="text-sky-700 mb-4 italic">
            “They come on time, clean thoroughly, and are super polite. Never
            switching!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="90.jpg"
              alt="Client 6"
              width={80}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sky-800">Daniel Lee</p>
              <p className="text-sm text-sky-600">Freelancer, Yogyakarta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
