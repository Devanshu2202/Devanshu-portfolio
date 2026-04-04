import { useTheme } from "../context/ThemeContext";
import HeroArticle from "../components/sections/HeroArticle";
import EditorialProfile from "../components/sections/EditorialProfile";
import ProjectGrid from "../components/sections/ProjectGrid";
import Classifieds from "../components/sections/Classifieds";
import CareerTimeline from "../components/sections/CareerTimeline";
import ContactAd from "../components/sections/ContactAd";
import FastFacts from "../components/sections/FastFacts";
import LettersToEditor from "../components/sections/LettersToEditor";

const HomeView = ({ data, onProjectSelect }) => {
  const { border } = useTheme();
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* LEFT COLUMN: HERO, PROFILE & PROJECTS */}
      <section className={`md:col-span-8 md:border-r-[1px] ${border} md:pr-8`}>
        <HeroArticle data={data.summary} />
        <EditorialProfile data={data.career_story} />
        <ProjectGrid projects={data.projects} onSelect={onProjectSelect} />
        <LettersToEditor testimonials={data.testimonials} />
      </section>

      {/* RIGHT COLUMN: SIDEBAR */}
      <aside className="md:col-span-4 flex flex-col gap-8">
        <FastFacts info={data.personal_info} />

        <Classifieds skills={data.skills} />
        <CareerTimeline experience={data.experience} />
        <ContactAd contact={data.contact} name={data.personal_info.name} />
      </aside>
    </main>
  );
};

export default HomeView;
