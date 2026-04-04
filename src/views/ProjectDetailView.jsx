import { useTheme } from "../context/ThemeContext";
import { ExternalLink, ArrowLeft, Clock } from "lucide-react";
const ProjectDetailView = ({ project, onBack }) => {
  const { border, accentText, mutedBg, isEveningEdition } = useTheme();
  return (
    <article className="max-w-4xl mx-auto animation-fade-in">
      <button
        onClick={onBack}
        className={`mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest pb-1 border-b-2 border-transparent hover:${border} transition-colors`}
      >
        <ArrowLeft size={16} /> Back to Front Page
      </button>

      <div className={`border-b-4 ${border} pb-6 mb-8`}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold px-3 py-1 uppercase tracking-widest`}
          >
            Special Feature Investigation
          </span>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${accentText}`}
          >
            {project.type}
          </span>
          <span className={`hidden sm:inline text-zinc-400 dark:text-zinc-600`}>
            |
          </span>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${accentText} flex items-center gap-1`}
          >
            <Clock size={12} /> {project.read_time}
          </span>
        </div>
        <h1 className="font-playfair text-4xl sm:text-6xl font-black leading-tight mb-4 tracking-tight">
          {project.title}
        </h1>
        <p className={`font-playfair text-xl sm:text-2xl italic ${accentText}`}>
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-10">
          {project.screenshot && (
            <figure className="w-full">
              <div
                className={`border-2 p-1 ${border} bg-white dark:bg-zinc-800`}
              >
                <img
                  src={project.screenshot}
                  alt={`Live screenshot of ${project.title}`}
                  className={`w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ${isEveningEdition ? "opacity-90" : "mix-blend-multiply"}`}
                />
              </div>
              {project.screenshot_caption && (
                <figcaption
                  className={`text-[10px] uppercase font-bold tracking-wider mt-3 pb-3 border-b ${border} ${accentText} text-center`}
                >
                  {project.screenshot_caption}
                </figcaption>
              )}
            </figure>
          )}

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-b border-dashed border-zinc-400 pb-1 inline-block">
              Part I: The Problem
            </h3>
            <p className="text-lg leading-relaxed font-serif text-justify first-letter:text-5xl first-letter:font-playfair first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {project.narrative.problem}
            </p>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-b border-dashed border-zinc-400 pb-1 inline-block">
              Part II: Analysis & Strategy
            </h3>
            <div className={`p-6 border ${border} ${mutedBg} bg-opacity-30`}>
              <p className="text-lg leading-relaxed font-serif text-justify">
                {project.narrative.analysis}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-b border-dashed border-zinc-400 pb-1 inline-block">
              Part III: The Resulting Solution
            </h3>
            <p className="text-lg leading-relaxed font-serif text-justify">
              {project.narrative.solution}
            </p>
          </section>
        </div>

        <aside className="md:col-span-4 flex flex-col gap-8">
          <div className={`border-2 ${border} p-5`}>
            <h4 className="font-playfair text-xl font-black uppercase tracking-widest mb-4 border-b pb-2">
              Technical Dossier
            </h4>
            <div className="space-y-4">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-500">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs font-semibold px-2 py-1 border ${border}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-zinc-300 dark:border-zinc-700">
                <a
                  href={project.link}
                  target="_blank"
                  className={`flex items-center justify-center w-full px-4 py-3 border-2 ${border} font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all`}
                >
                  {project.live ? "View Live App" : "View Repository"}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};
export default ProjectDetailView;
