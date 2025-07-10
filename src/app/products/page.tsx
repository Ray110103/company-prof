import { Montserrat } from 'next/font/google';
import React from 'react'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


const Services = () => {
  return (
   <main className={`bg-white text-sky-900 py-16 px-12 ${montserrat.className}`}>
      <section className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-800">Our Services</h2>
          <p className="text-sky-600 mt-2">
            CleanGo provides professional cleaning solutions for every space and every need.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🏠 House Cleaning</h3>
            <p className="text-sky-700">
              Regular or deep cleaning for apartments and homes. We handle dusting, sweeping, mopping, windows, and more.
            </p>
          </div>

          {/* Service 2 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🏢 Office Cleaning</h3>
            <p className="text-sky-700">
              Keep your workspace clean and productive with scheduled or on-demand office cleaning services.
            </p>
          </div>

          {/* Service 3 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🚚 Move-In / Move-Out</h3>
            <p className="text-sky-700">
              We clean your space before you move in or after you move out, so it’s spotless and ready.
            </p>
          </div>

          {/* Service 4 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🔨 Post-Renovation</h3>
            <p className="text-sky-700">
              Clear out dust, debris, and construction messes after any building or renovation project.
            </p>
          </div>

          {/* Service 5 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🧽 Deep Cleaning</h3>
            <p className="text-sky-700">
              Intensive cleaning that includes corners, ceilings, behind furniture, and other hard-to-reach areas.
            </p>
          </div>

          {/* Service 6 */}
          <div className="border border-sky-100 p-6 rounded-xl shadow hover:shadow-md transition ">
            <h3 className="text-2xl font-semibold text-sky-800 mb-2">🧴 Disinfection Service</h3>
            <p className="text-sky-700">
              Sanitization and disinfection using hospital-grade materials for homes and workplaces.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services