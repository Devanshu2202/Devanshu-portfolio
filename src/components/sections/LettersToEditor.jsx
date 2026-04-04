import { useTheme } from "../../context/ThemeContext";

const LettersToEditor = ({ testimonials }) => {
  const { border, accentText, mutedBg } = useTheme();
  return (
    <article className="mt-12 print-break-inside-avoid">
      <div
        className={`border-t-4 border-b-2 ${border} py-2 mb-6 flex justify-between items-center`}
      >
        <h2 className="font-playfair text-2xl font-black uppercase tracking-widest">
          Letters to the Editor
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`p-5 border ${border} ${mutedBg} bg-opacity-30 relative`}
          >
            <span
              className={`text-5xl font-playfair absolute top-2 left-2 opacity-20 ${accentText}`}
            >
              "
            </span>
            <p className="font-serif italic text-sm relative z-10 mb-4 text-justify leading-relaxed mt-2">
              {t.quote}
            </p>
            <div className="text-right border-t border-dashed border-zinc-400 dark:border-zinc-600 pt-2">
              <p className="font-bold text-xs uppercase tracking-wider">
                {t.author}
              </p>
              <p
                className={`text-[10px] uppercase font-bold tracking-widest ${accentText} mt-0.5`}
              >
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
export default LettersToEditor;
