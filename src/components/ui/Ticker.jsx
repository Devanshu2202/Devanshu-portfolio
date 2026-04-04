import { useTheme } from "../../context/ThemeContext";

const Ticker = ({ items }) => {
  const { border, text } = useTheme();
  return (
    <div
      className={`border-b-2 ${border} ${text} text-xs font-bold uppercase py-1 tracking-widest`}
    >
      <div className="ticker-wrap">
        <div className="ticker">
          {items.map((item, index) => (
            <span key={`tick1-${index}`} className="mx-8">
              ✦ {item}{" "}
            </span>
          ))}
          {items.map((item, index) => (
            <span key={`tick2-${index}`} className="mx-8">
              ✦ {item}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
