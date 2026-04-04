import { useTheme } from "../../context/ThemeContext";
import { ChevronRight } from "lucide-react";

const HeroArticle = ({ data }) => {
  const { border, accentText } = useTheme();
  return (
    <article className={`mb-10 border-b-2 ${border} pb-8`}>
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`bg-red-700 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider`}
        >
          Front Page Feature
        </span>
      </div>
      <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 tracking-tight">
        {data.headline}
      </h2>
      <h3
        className={`font-playfair text-xl sm:text-2xl italic ${accentText} mb-6`}
      >
        {data.subheadline}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          <p className="mb-4">{data.body[0]}</p>
          <p>{data.body[1]}</p>
        </div>
        <div className="text-lg leading-relaxed sm:border-l sm:pl-6 sm:border-zinc-300 dark:sm:border-zinc-700">
          <p className="mb-6">{data.body[2]}</p>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center w-full px-6 py-3 border-2 ${border} font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all group`}
          >
            Contact Candidate
            <ChevronRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </article>
  );
};
export default HeroArticle;
