import { useTheme } from "../../context/ThemeContext";
const Footer = ({ data, onHomeClick }) => {
  const { border, accentText } = useTheme();
  return (
    <footer
      className={`mt-16 pt-6 border-t-4 ${border} text-center flex flex-col items-center pb-8`}
    >
      <h2
        className="font-playfair text-3xl font-black uppercase tracking-widest mb-4 opacity-80 cursor-pointer"
        onClick={onHomeClick}
      >
        {data.publication.name}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4">
        <span>
          © {new Date().getFullYear()} {data.personal_info.name}
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="w-full sm:w-auto mt-2 sm:mt-0">
          Printed in the Cloud
        </span>
      </div>
      <p className={`text-xs ${accentText} max-w-md px-4`}>
        This portfolio was carefully typeset using React, Tailwind CSS, and a
        dedication to responsive, editorial design. No real paper was harmed in
        its making.
      </p>
    </footer>
  );
};
export default Footer;
