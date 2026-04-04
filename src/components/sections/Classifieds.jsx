import { useTheme } from "../../context/ThemeContext";

const Classifieds = ({ skills }) => {
  const { border } = useTheme();
  return (
    <div className={`border-2 ${border} p-5 relative overflow-hidden`}>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      ></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="font-playfair text-2xl font-black uppercase tracking-widest border-b border-black dark:border-white pb-2">
            Classifieds
          </h3>
          <p className="text-xs uppercase tracking-widest mt-1 font-bold">
            Skills & Proficiencies
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4
                className={`text-sm font-black uppercase tracking-wider mb-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-2 py-1 inline-block`}
              >
                {skillGroup.category}
              </h4>
              <ul className="list-none space-y-1">
                {skillGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-medium flex items-center before:content-[''] before:w-1 before:h-1 before:bg-current before:rounded-full before:mr-2 before:inline-block"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classifieds;
