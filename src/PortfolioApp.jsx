import { useEffect, useState } from "react";
import portfolioData from "./data/content.json";
import { useTheme } from "./context/ThemeContext";
import GlobalStyles from "./components/ui/GlobalStyles";
import Ticker from "./components/ui/Ticker";
import Masthead from "./components/layout/Masthead";
import HomeView from "./views/HomeView";
import Footer from "./components/layout/Footer";
import ProjectDetailView from "./views/ProjectDetailView";
import FloatingContact from "./components/ui/FloatingContact";

const PortfolioApp = () => {
  const { bg, text } = useTheme();

  const [currentDate, setCurrentDate] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(date.toLocaleDateString("en-US", options).toUpperCase());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProject]);

  const handleHomeClick = () => setActiveProject(null);

  return (
    <div
      className={`min-h-screen ${bg} ${text} font-inter transition-colors duration-500 newspaper-pattern`}
    >
      <GlobalStyles />
      <Ticker items={portfolioData.ticker} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Masthead
          data={portfolioData}
          currentDate={currentDate}
          onHomeClick={handleHomeClick}
        />

        {activeProject ? (
          <ProjectDetailView project={activeProject} onBack={handleHomeClick} />
        ) : (
          <HomeView data={portfolioData} onProjectSelect={setActiveProject} />
        )}

        <Footer data={portfolioData} onHomeClick={handleHomeClick} />
      </div>
      <FloatingContact />
    </div>
  );
};
export default PortfolioApp;
