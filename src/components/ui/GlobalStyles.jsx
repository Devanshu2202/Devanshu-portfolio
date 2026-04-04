import { useTheme } from "../../context/ThemeContext";

const GlobalStyles = () => {
  const { isEveningEdition } = useTheme();
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&display=swap');
      
      .font-playfair { font-family: 'Playfair Display', serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      
      .newspaper-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='${isEveningEdition ? "0.04" : "0.06"}'/%3E%3C/svg%3E");
      }
      
      .ticker-wrap { width: 100%; overflow: hidden; white-space: nowrap; box-sizing: border-box; }
      .ticker { display: inline-block; padding-left: 100%; animation: ticker 30s linear infinite; }
      .ticker:hover { animation-play-state: paused; }
      
      @keyframes ticker {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-100%, 0, 0); }
      }

      .ink-hover { transition: all 0.2s ease; }
      .ink-hover:hover { text-shadow: 0px 0px 1px currentColor; transform: scale(1.01); }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animation-fade-in { animation: fadeIn 0.4s ease-out forwards; }
    `,
      }}
    />
  );
};

export default GlobalStyles;
