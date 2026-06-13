import ieeeImage from "../assets/images/ieee.jfif";
import iosbcImage from "../assets/images/iosbcbaru.jfif";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const organizations = [
  {
    organization: "IEEE Student Branch Telkom University",
    role: "Staff of Creative Division",
    period: "Dec 2023 - Jan 2025",
    location: "Bandung, Indonesia",
    image: ieeeImage,
    description: [
      "Created and planned content for IEEE Student Branch Telkom University social media",
      "Managed IEEE Student Branch Telkom University Student Branch social media accounts"
    ],
    activities: [
      "Creative Content Creation",
      "Teamwork"
    ]
  },

  {
    organization: "International Office Student Buddy Club (IOSBC)",
    role: "Hospitality Division",
    period: "Feb 2024 - Mar 2025",
    location: "Telkom University",
    image: iosbcImage,
    description: [
      "Assisted International Student enrolled at Telkom University.",
      "Organized events for international students and ensured the smooth execution of the events"
    ],
    activities: [
      "Teamwork",
      "Event Management",
      "Public Speaking"
    ]
  }
];

function Organization() {
  return (
    <section
      id="organization"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Campus Involvement
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Organizations
          </h2>

        </div>

        <div className="space-y-8">

          {organizations.map((org, index) => (

            <div
              key={index}
              className="
              bg-slate-900/50
              backdrop-blur-xl
              border
              border-slate-800
              rounded-3xl
              overflow-hidden
              hover:border-cyan-500/40
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >

              <div className="flex flex-col lg:flex-row">

                {/* Image */}

                <div
                  className="
                  lg:w-72
                  shrink-0
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  p-5
                  "
                >

                  <div
                    className="
                    w-full
                    aspect-square
                    rounded-2xl
                    overflow-hidden
                    bg-slate-700
                    "
                  >

                    <img
                      src={org.image}
                      alt={org.organization}
                      className="
                      w-full
                      h-full
                      object-contain
                      "
                    />

                  </div>

                </div>

                {/* Content */}

                <div className="flex-1 p-8">

                  <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {org.organization}
                      </h3>

                      <p className="text-cyan-400 text-lg mt-2">
                        {org.role}
                      </p>

                    </div>

                    <div className="space-y-2 text-sm">

                      <div className="flex items-center gap-2 text-slate-300">
                        <FaCalendarAlt className="text-cyan-400" />
                        {org.period}
                      </div>

                      <div className="flex items-center gap-2 text-slate-400">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        {org.location}
                      </div>

                    </div>

                  </div>

                  {/* Description */}

                  <ul className="mt-6 space-y-3">

                    {org.description.map((item, idx) => (

                      <li
                        key={idx}
                        className="
                        flex
                        items-start
                        gap-3
                        text-slate-300
                        "
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>
                        <span>{item}</span>
                      </li>

                    ))}

                  </ul>

                  {/* Activities */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {org.activities.map((item, idx) => (

                      <span
                        key={idx}
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-400
                        text-sm
                        "
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Organization;