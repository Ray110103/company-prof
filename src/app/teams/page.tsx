"use client";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

export default function TeamsPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setMembers(data.results));
  }, []);

  return (
    <main
      className={`bg-white text-sky-900 py-16 px-6 sm:px-12 ${montserrat.className}`}
    >
      <div className="max-w-[1100px] mx-auto">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-800">Meet Our Team</h2>
          <p className="text-sky-600 mt-2 max-w-lg mx-auto">
            Trained. Professional. Reliable. Get to know the people behind
            CleanGo.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member: any) => (
            <div
              key={member.login.uuid}
              className="border border-sky-100 rounded-xl p-6 shadow-sm  hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.picture.large}
                  alt="Team Member"
                  className="w-full h-48 object-cover rounded-lg shadow mb-4"
                />
                <h3 className="text-xl font-semibold text-sky-800 text-center">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-sky-600 text-sm mb-1">Cleaning Specialist</p>
                <p className="text-sky-500 text-xs text-center">
                  Based in {member.location.city}, {member.location.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
