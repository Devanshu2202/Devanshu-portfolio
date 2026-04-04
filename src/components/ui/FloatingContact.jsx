import { MessageSquare } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const FloatingContact = () => {
  const { border } = useTheme();
  return (
    <a
      href="#contact"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 border-2 ${border} font-bold uppercase tracking-widest bg-[#f4f1ea] dark:bg-zinc-900 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]`}
      title="Jump to Contact Info"
    >
      <MessageSquare size={18} />
      <span className="hidden sm:inline">Hire Candidate</span>
      <span className="sm:hidden">Hire</span>
    </a>
  );
};
export default FloatingContact;
