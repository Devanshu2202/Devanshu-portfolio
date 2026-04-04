import { Sun, Moon, FileDown } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Masthead = ({ data, currentDate, onHomeClick }) => {
  const { border, mutedBg, isEveningEdition, toggleTheme } = useTheme();
  return (
    <header className="text-center mb-8 relative">
      <div
        className={`flex flex-col sm:flex-row justify-between items-center sm:items-end border-b-2 ${border} pb-3 gap-3 mb-1`}
      >
        <a
          href={data.personal_info.resume_link}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 border-2 ${border} hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors`}
          title="Download Official Dossier"
        >
          <FileDown size={14} />
          <span className="hidden sm:inline">Download Dossier</span>
          <span className="sm:hidden">Resume</span>
        </a>

        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 border ${border} rounded-full hover:${mutedBg} transition-colors`}
        >
          {isEveningEdition ? <Sun size={14} /> : <Moon size={14} />}
          {isEveningEdition ? "Morning Edition" : "Evening Edition"}
        </button>

        <span className="text-sm font-semibold tracking-wider uppercase hidden sm:block">
          {data.publication.volume}
        </span>
      </div>

      <h1
        className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight py-4 leading-none text-center ink-hover cursor-pointer"
        onClick={onHomeClick}
      >
        {data.publication.name}
      </h1>

      <div
        className={`flex justify-between items-center border-t-4 border-b-[1px] ${border} py-2 mt-1`}
      >
        <span className="text-sm font-medium hidden sm:block">
          {data.personal_info.location}
        </span>
        <span className="text-sm font-bold uppercase tracking-widest">
          {currentDate}
        </span>
        <span className="text-sm font-medium">{data.publication.price}</span>
      </div>
    </header>
  );
};

export default Masthead;
