import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


const AboutUs = () => {
  return (
    <main className={`bg-white text-sky-900 py-16 px-6 md:px-8 lg:px-12 ${montserrat.className}`}>
      <section className="max-w-5xl mx-auto space-y-20">
        {/* Company History */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-sky-700 leading-relaxed text-sm md:text-base">
            <strong>CleanGo</strong> began in 2018 with a simple idea: to create a cleaning service that people could truly trust.
            At the time, professional cleaning services were either too expensive or lacked consistency. We set out to change that by building a reliable team that delivers high-quality results every time.
            <br /><br />
            Our journey started with a small team of three cleaners operating in South Jakarta. Through word of mouth and positive reviews, we quickly grew our client base.
            Today, CleanGo operates in multiple cities across Indonesia, serving homes, offices, restaurants, clinics, and commercial spaces.
            We owe our growth to our passionate team, our loyal customers, and our commitment to doing things the right way — with care, honesty, and attention to detail.
          </p>
        </div>

        {/* Company Culture */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-sky-700 leading-relaxed text-sm md:text-base">
            We believe that a clean environment creates clarity and peace of mind — not just for our clients, but for our team as well.
            At CleanGo, our company culture is built on five core values: integrity, responsibility, teamwork, learning, and excellence.
            <br /><br />
            Our team members go through comprehensive training, not only on cleaning techniques but also on customer communication,
            time management, and eco-friendly practices. We take pride in being punctual, respectful, and proactive.
            CleanGo isn’t just a cleaning company — we are a community of people who genuinely care about delivering positive results and leaving our clients satisfied and smiling.
          </p>
        </div>

        {/* Our Commitment */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-sky-700 leading-relaxed text-sm md:text-base mb-4">
            We are committed to being more than just a cleaning service — we are your reliable partners in maintaining comfort, hygiene, and productivity.
            Whether you're a busy parent, a business owner, or someone who just wants a clean and calm space to live or work in, CleanGo is here for you.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sky-700 text-sm md:text-base">
            <li>To consistently deliver exceptional cleaning results.</li>
            <li>To use safe, non-toxic, and environmentally friendly products.</li>
            <li>To show up on time, with respect for your schedule and your space.</li>
            <li>To remain transparent, honest, and affordable in all our pricing.</li>
            <li>To grow and evolve by listening to your feedback and improving every day.</li>
          </ul>
        </div>

        {/* Team Image */}
        <div className="w-full flex justify-center pt-8">
          <img
            src="/team.jpg" 
            alt="Our Cleaning Team"
            width={700}
            height={450}
            className="rounded-lg shadow-md object-cover w-full max-w-[700px] h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
