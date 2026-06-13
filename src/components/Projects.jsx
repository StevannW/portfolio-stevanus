import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import hydroponicImage from "../assets/images/edgedevice.jfif";
import taipeisimImage from "../assets/images/taipeisim.jfif";
import figlibImage from "../assets/images/figlibseg.jpg";

const projects = [
  {
    title: "Smart Hydroponic Automation System",
    image: hydroponicImage,
    description:
      "Designed and developed an end-to-end hydroponic automation platform as a capstone project. The system utilizes a custom ESP32-S3 PCB as an edge device for collecting and transmitting real-time sensor data. Automation workflows were implemented using Node-RED, while monitoring and control dashboards were built with Home Assistant and custom JavaScript components.",
    technologies: [
      "ESP32-S3",
      "MQTT",
      "Node-RED",
      "Home Assistant",
      "JavaScript",
      "IoT",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "AI-Powered Traffic Route Optimization for Taipei",
    image: taipeisimImage,
    description:
  "Developed a web-based route optimization system for Taipei City inspired by Google Maps. The system uses machine learning models trained on historical traffic data (UTD19) to predict road conditions and estimate travel time. A React.js frontend provides an interactive map interface, while a .NET backend handles route calculation, ML inference, and API services. The system enables dynamic route selection based on traffic, distance, and time efficiency.",
    technologies: [
      "React.js",
      ".NET",
      "Machine Learning",
      "Traffic Prediction",
      "GIS",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },


  {
    title: "FIgLib-Seg: Wildfire Smoke Segmentation Dataset",
    image: figlibImage,
    description:
  "Developed a wildfire smoke segmentation dataset consisting of 39,584 images with pixel-level annotations for smoke and fire classes. A semi-automated pipeline was built using YOLOv8m for pre-labeling, SAM for mask generation, and manual validation to ensure data quality. The dataset was used to evaluate multiple segmentation models including TinyUNet, LRASPP, and Fast-SCNN, with LRASPP achieving the best performance in mIoU and F1-score.",
    technologies: [
      "YOLOv8",
      "SAM",
      "Python",
      "Computer Vision",
      "Deep Learning",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Featured Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
           <div
  key={index}
  className="
    group
    bg-slate-950
    border
    border-slate-800
    rounded-3xl
    overflow-hidden
    hover:border-cyan-500/40
    hover:-translate-y-2
    transition-all
    duration-300
    flex
    flex-col
    h-full
  "
>

              {/* Image */}
              <div className="aspect-video bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3
                        py-1
                        rounded-lg
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-400
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-6">

                  

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;