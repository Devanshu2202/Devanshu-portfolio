import { useTheme } from "../../context/ThemeContext";
import { Briefcase } from "lucide-react";

const CareerTimeline = ({ experience }) => {
  const { border, mutedBg, accentText } = useTheme();
  return (
    <div>
      <div className={`border-b-4 ${border} mb-6 pb-2`}>
        <h3 className="font-playfair text-xl font-black uppercase tracking-widest flex items-center gap-2">
          <Briefcase size={20} /> Career Archives
        </h3>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[9px] before:h-full before:w-0.5 before:bg-zinc-300 dark:before:bg-zinc-700">
        {experience.map((job) => (
          <div key={job.id} className="relative flex items-start gap-4 group">
            <div
              className={`mt-1.5 flex items-center justify-center w-5 h-5 rounded-full border-2 ${border} bg-[#f4f1ea] dark:bg-zinc-900 z-10 shrink-0`}
            ></div>

            <div
              className={`flex-1 p-5 border ${border} ${mutedBg} bg-opacity-30 relative`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400 mb-1">
                {job.period}
              </div>
              <h4 className="font-playfair text-xl font-bold leading-tight mb-1">
                {job.role}
              </h4>
              <div className={`text-sm font-semibold mb-3 ${accentText}`}>
                {job.company}
              </div>
              <ul className="text-sm space-y-2 list-disc pl-4 marker:text-zinc-500">
                {job.achievements.map((acc, i) => (
                  <li key={i}>{acc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
