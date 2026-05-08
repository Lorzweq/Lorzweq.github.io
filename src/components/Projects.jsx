import { useMemo, useState } from "react";
import { useEffect } from "react";

const projects = [
  {
    title: "PulseSensor",
    summary:
      "Heart-rate monitoring system with sensor data shown on OLED, Blynk, database, and web dashboard.",
    tech: ["Embedded Sensor", "OLED", "Blynk", "Web Dashboard"],
    githubUrl: "https://github.com/Lorzweq/PulseSensor",
    liveDemoUrl: "",
    previewImageUrl: "",
    projectType: "hardware",
    status: "Completed",
  },
  {
    title: "ClothShop",
    summary:
      "Student e-commerce remake project inspired by Zalando. Includes checkout flow, shopping history, and admin/marketing dashboards, but is not publicly deployed.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "React Router"],
    githubUrl: "https://github.com/Lorzweq/ClothShop",
    liveDemoUrl: "",
    projectType: "website",
    allowPreview: false,
    status: "Student Project",
  },
  {
    title: "React Carousel Component",
    summary:
      "Reusable 3D carousel component with smooth depth effects and support for any JSX content.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Lorzweq/CarouselComponent",
    projectType: "component",
    status: "Open Source",
  },
  {
    title: "iOS/Android App",
    summary:
      "Mobile application currently in development for both iOS and Android with a React Native stack.",
    tech: ["React Native", "Tailwind CSS"],
    projectType: "mobile",
    status: "In Progress",
  },
  {
    title: "Data Filter Component",
    summary:
      "Reusable React component for displaying data sets and filtering records with a clean UI.",
    tech: ["React", "Vite", "Tailwind CSS"],
    projectType: "component",
    status: "Completed",
  },
  {
    title: "JobTracker",
    summary:
      "Web application for tracking job applications, interviews, and offers with a clean UI and local storage persistence.",
    tech: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Lorzweq/JobTracker",
    liveDemoUrl: "https://lorzweq.github.io/JobTracker/",
    allowPreview: true,
    projectType: "website",
    status: "Completed",
  },
  {
    title: "PowerPriceTracker",
    summary:
      "Web application that tracks and visualizes hourly electricity prices in Finland with data from Fingrid.",
    tech: ["React", "Vite", "Tailwind CSS", "Fingrid API"],
    githubUrl: "https://github.com/Lorzweq/Power-Price-Tracker",
    liveDemoUrl: "https://lorzweq.github.io/Power-Price-Tracker/",
    allowPreview: true,
    projectType: "website",
    status: "Completed",
  }
];

export function Projects() {
  const [demoMode, setDemoMode] = useState(false);
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    if (!activePreview) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activePreview]);

  const hasEmbeddableDemo = (url) => {
    if (!url) {
      return false;
    }

    return !url.includes("github.com");
  };

  const isWebsiteProject = (project) => project.projectType === "website";
  const canShowPreview =
    (project) => isWebsiteProject(project) && project.allowPreview !== false;

  const getStatusBadgeClass = (status) => {
    if (status === "Student Project") {
      return "bg-indigo-950/70 border-indigo-400/60 text-indigo-100";
    }

    if (status === "Open Source") {
      return "bg-emerald-950/70 border-emerald-500/60 text-emerald-100";
    }

    if (status === "In Progress") {
      return "bg-amber-950/70 border-amber-500/60 text-amber-100";
    }

    return "bg-blue-950 border-blue-700 text-blue-100";
  };

  const visibleProjects = useMemo(() => {
    if (!demoMode) {
      return projects;
    }

    return projects.filter(
      (project) =>
        isWebsiteProject(project) &&
        (Boolean(project.liveDemoUrl) || Boolean(project.previewImageUrl))
    );
  }, [demoMode]);

  return (
    <section
      id="projects"
      className="relative py-20 min-h-screen bg-gradient-to-b from-slate-950/100 via-blue-950/95 to-slate-950 text-white overflow-hidden"
    >
      <div className="absolute left-1/2 lg:left-1/5 -translate-x-1/3 pointer-events-none opacity-45">
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 mt-14">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-100">
            Projects Showcase
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Turn on demo mode when presenting. It will show only website
            projects with a live link or screenshot preview.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 bg-blue-950/45 border border-blue-800/60 rounded-xl p-4 mb-8 backdrop-blur-sm">
          <div>
            <p className="text-sm text-cyan-100 font-medium">Demo Mode</p>
            <p className="text-xs text-blue-200/70">
              {demoMode
                ? `Showing ${visibleProjects.length} demo-ready projects`
                : `Showing all ${projects.length} projects`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDemoMode((prev) => !prev)}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-b from-blue-700 to-blue-900 text-blue-50 hover:from-blue-600 hover:to-blue-800 ring-1 ring-blue-500/40 shadow-[inset_0_1px_0_rgba(191,219,254,0.2)] transition"
          >
            {demoMode ? "Disable Demo Mode" : "Enable Demo Mode"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group p-5 rounded-2xl border border-blue-800/60 bg-blue-950/40 hover:border-cyan-300/80 hover:-translate-y-1 transition"
            >
              {canShowPreview(project) ? (
                <button
                  type="button"
                  onClick={() => setActivePreview(project)}
                  className="w-full h-36 rounded-xl border border-blue-800/60 bg-gradient-to-br from-blue-950 to-slate-900 overflow-hidden mb-4 text-left hover:border-cyan-300/70 transition"
                >
                  {hasEmbeddableDemo(project.liveDemoUrl) ? (
                    <iframe
                      title={`${project.title} preview`}
                      src={project.liveDemoUrl}
                      className="w-full h-full border-none pointer-events-none"
                      style={{ zoom: '0.4' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-end justify-between p-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-cyan-300">
                          Website Preview
                        </p>
                        <p className="text-sm font-semibold text-slate-100">
                          Click to view
                        </p>
                      </div>
                      <span className="text-[11px] px-2 py-1 rounded-md border border-blue-500/70 text-blue-200">
                        Mini Window
                      </span>
                    </div>
                  )}
                </button>
              ) : (
                <div className="w-full h-16 rounded-xl border border-blue-800/60 bg-slate-900/60 mb-4 flex items-center px-3">
                  <span className="text-[11px] uppercase tracking-wide text-blue-200/80">
                    {isWebsiteProject(project)
                      ? "Preview disabled for this project"
                      : "Preview available only for website projects"}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h2>
                <span
                  className={`text-[10px] uppercase tracking-wider text-center px-2 py-1 rounded-full border ${getStatusBadgeClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-5 min-h-20">
                {project.summary}
              </p>

              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="text-[11px] px-2 py-1 rounded-md bg-blue-950 text-cyan-200 border border-blue-800/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-semibold bg-blue-950/70 text-blue-200 border border-blue-700">
                    Demo On Request
                  </span>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-semibold bg-gradient-to-b from-blue-700 to-blue-900 text-blue-50 hover:from-blue-600 hover:to-blue-800 ring-1 ring-blue-500/35 shadow-[inset_0_1px_0_rgba(191,219,254,0.2)] transition"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-semibold border border-slate-700 text-slate-500">
                    Private Work
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {activePreview && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-3 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-5xl rounded-2xl border border-blue-700 bg-slate-950 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-blue-800">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {activePreview.title}
                  </p>
                  <p className="text-xs text-slate-400">Mini Preview Window</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-500 text-slate-200 hover:border-cyan-300 hover:text-cyan-200 transition"
                >
                  Close
                </button>
              </div>

              <div className="h-[60vh] bg-slate-900">
                {hasEmbeddableDemo(activePreview.liveDemoUrl) ? (
                  <iframe
                    title={`${activePreview.title} live preview`}
                    src={activePreview.liveDemoUrl}
                    className="w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <div>
                      <p className="text-lg font-semibold text-slate-100 mb-2">
                        No embeddable preview available
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
