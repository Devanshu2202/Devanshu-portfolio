import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import { Copy, Check, Mail } from "lucide-react";

const ContactAd = ({ contact, name }) => {
  const { border } = useTheme();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div
      id="contact"
      className={`mt-auto border-4 ${border} p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]`}
    >
      <h2 className="font-playfair text-3xl font-black uppercase tracking-tight mb-2">
        Want to Hire?
      </h2>
      <p className="text-sm font-medium mb-6 uppercase tracking-wider">
        {contact.call_to_action}
      </p>

      <div className="flex flex-col gap-3 mb-6">
        <a
          href={`mailto:${contact.email}`}
          className={`flex items-center justify-center gap-2 p-3 border border-dashed ${border} font-bold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors`}
        >
          <Mail size={18} /> Email the Candidate
        </a>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleCopy(contact.email, "email")}
            className={`flex items-center justify-center gap-2 p-2 border ${border} font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
          >
            {copiedField === "email" ? (
              <Check size={16} className="text-green-600 dark:text-green-400" />
            ) : (
              <Copy size={16} />
            )}
            {copiedField === "email" ? "Copied!" : "Copy Email"}
          </button>
          <button
            onClick={() => handleCopy(contact.phone, "phone")}
            className={`flex items-center justify-center gap-2 p-2 border ${border} font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
          >
            {copiedField === "phone" ? (
              <Check size={16} className="text-green-600 dark:text-green-400" />
            ) : (
              <Copy size={16} />
            )}
            {copiedField === "phone" ? "Copied!" : "Copy Phone"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={`https://${contact.github}`}
            target="_blank"
            className={`flex items-center justify-center gap-2 p-2 border ${border} font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
          >
            GitHub
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            className={`flex items-center justify-center gap-2 p-2 border ${border} font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="text-xs uppercase tracking-widest font-bold border-t border-b py-2 border-zinc-300 dark:border-zinc-700">
        Reference Code:{" "}
        <span className="font-mono">
          #HIRE-{name.split(" ")[0].toUpperCase()}
        </span>
      </p>
    </div>
  );
};

export default ContactAd;
