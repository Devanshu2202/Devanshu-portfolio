import { useTheme } from "../../context/ThemeContext";
import { ExternalLink, SearchCheck } from "lucide-react";

const ProjectGrid = ({ projects, onSelect }) => {
  const { border, link, isEveningEdition } = useTheme();
  return (
    <article className="mt-12">
      <div
        className={`border-t-4 border-b-2 ${border} py-2 mb-6 flex justify-between items-center`}
      >
        <h2 className="font-playfair text-2xl font-black uppercase tracking-widest">
          Featured Stories: The Projects
        </h2>
        <SearchCheck size={24} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group border ${border} hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all p-5 flex flex-col h-full bg-opacity-30 ${isEveningEdition ? "bg-zinc-800" : "bg-white"}`}
          >
            <div className="text-xs font-bold uppercase tracking-wider mb-2 text-red-700 dark:text-red-400">
              ✦ {project.type}
            </div>
            <h3
              className="font-playfair text-xl font-bold mb-3 leading-tight group-hover:underline cursor-pointer"
              onClick={() => onSelect(project)}
            >
              {project.title}
            </h3>
            <p className="text-sm mb-4 flex-grow">{project.description}</p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-2 py-1 bg-transparent border ${border}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelect(project)}
                className={`inline-flex items-center text-sm font-bold uppercase tracking-widest ${link}`}
              >
                Read Full Story
                <ExternalLink size={14} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
export default ProjectGrid;
