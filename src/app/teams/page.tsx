"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  login: {
    uuid: string;
  };
}

export default function TeamsPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setMembers(data.results));
  }, []);

  return (
    <main className="bg-white text-sky-900 py-16 px-12">
      <div className="max-w-[1100px] mx-auto">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-800">Meet Our Team</h2>
          <p className="text-sky-600 mt-2">
            Trained. Professional. Reliable. Get to know the people behind CleanGo.
          </p>
        </section>

        <div className="grid grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.login.uuid}
              className="border border-sky-100 rounded-xl p-6 shadow-sm bg-sky-50 hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.picture.large}
                  alt="Team Member"
                  className="w-32 h-32 object-cover rounded-full shadow mb-4"
                />
                <h3 className="text-xl font-semibold text-sky-800">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-sky-600 text-sm mb-2">
                  Cleaning Specialist
                </p>
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
