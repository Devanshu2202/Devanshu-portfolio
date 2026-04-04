import { useTheme } from "../../context/ThemeContext";

const EditorialProfile = ({ data }) => {
  const { border, accentText, isEveningEdition } = useTheme();
  return (
    <article className={`mb-10`}>
      <h4 className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-dashed border-zinc-400 pb-1 inline-block">
        Editorial Op-Ed
      </h4>
      <h2 className="font-playfair text-3xl font-bold mb-2">{data.title}</h2>
      <p className={`font-inter font-semibold mb-4 ${accentText}`}>
        {data.subtitle}
      </p>

      <div
        className={`p-6 border ${border} relative bg-opacity-50 ${isEveningEdition ? "bg-black" : "bg-white"}`}
      >
        <div
          className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${border}`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${border}`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${border}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${border}`}
        ></div>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {data.image && (
            <figure className="w-full sm:w-1/3 shrink-0">
              <div
                className={`border-2 p-1 ${border} bg-white dark:bg-zinc-800`}
              >
                <img
                  src={data.image}
                  alt="Candidate Profile"
                  className={`w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500 ${isEveningEdition ? "opacity-90" : "mix-blend-multiply"}`}
                />
              </div>
              {data.image_caption && (
                <figcaption
                  className={`text-[10px] uppercase font-bold tracking-wider mt-2 ${accentText} text-center sm:text-left`}
                >
                  {data.image_caption}
                </figcaption>
              )}
            </figure>
          )}
          <div className="flex-1">
            <p className="text-lg leading-relaxed font-serif text-justify">
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EditorialProfile;
