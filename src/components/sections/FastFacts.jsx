import { useTheme } from "../../context/ThemeContext";

const FastFacts = ({ info }) => {
  const { border, mutedBg } = useTheme();
  return (
    <div className={`border-2 ${border} p-4 relative bg-opacity-40 ${mutedBg}`}>
      <div
        className={`border-b-2 ${border} pb-2 mb-3 flex items-center justify-between`}
      >
        <h3 className="font-playfair text-lg font-black uppercase tracking-widest">
          At A Glance
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-1.5 py-0.5">
          TL;DR
        </span>
      </div>
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between items-start border-b border-dashed border-zinc-400 dark:border-zinc-600 pb-2 last:border-0 last:pb-0">
          <span className="font-bold uppercase text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">
            Location
          </span>
          <span className="font-semibold text-right max-w-[60%]">
            {info.location}
          </span>
        </li>
        <li className="flex justify-between items-start border-b border-dashed border-zinc-400 dark:border-zinc-600 pb-2 last:border-0 last:pb-0">
          <span className="font-bold uppercase text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">
            Timezone
          </span>
          <span className="font-semibold text-right max-w-[60%]">
            {info.timezone}
          </span>
        </li>
        <li className="flex justify-between items-start border-b border-dashed border-zinc-400 dark:border-zinc-600 pb-2 last:border-0 last:pb-0">
          <span className="font-bold uppercase text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">
            Eligibility
          </span>
          <span className="font-semibold text-right max-w-[60%]">
            {info.authorization}
          </span>
        </li>
        <li className="flex justify-between items-start border-b border-dashed border-zinc-400 dark:border-zinc-600 pb-2 last:border-0 last:pb-0">
          <span className="font-bold uppercase text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">
            Availability
          </span>
          <span className="font-semibold text-right max-w-[60%]">
            {info.availability}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FastFacts;
