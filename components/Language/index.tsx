import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Language.module.css"; // Kita akan buat file CSS module untuk header
// --- SVG Komponen untuk Bendera ---
const IndonesianFlag = () => (
  <svg
    className={styles.flagIcon}
    viewBox="0 0 3 2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="3" height="1" fill="#E70011" />
    <rect width="3" height="1" y="1" fill="#FFFFFF" />
  </svg>
);

const EnglishFlag = () => (
  <svg
    className={styles.flagIcon}
    viewBox="0 0 60 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <clipPath id="a">
      <path d="m0 0h60v30h-60z" />
    </clipPath>
    <clipPath id="b">
      <path d="m30 15 30 15v-30l-30 15zm-30 0h30v15l-30-15zm0-15v15l30-15h-30zm30 0-30 15h30v-15z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path d="m0 0v30h60v-30z" fill="#00247d" />
      <path d="m0 0 60 30m-60 0 60-30" stroke="#fff" strokeWidth="6" />
      <path
        d="m0 0 60 30m-60 0 60-30"
        clipPath="url(#b)"
        stroke="#cf142b"
        strokeWidth="4"
      />
      <path d="m30 0v30m-30-15h60" stroke="#fff" strokeWidth="10" />
      <path d="m30 0v30m-30-15h60" stroke="#cf142b" strokeWidth="6" />
    </g>
  </svg>
);
// --- End of SVG Komponen ---

const Language = () => {
  const [currentLang, setCurrentLang] = useState<'id' | 'en'>('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const cookieLocal = document.cookie
        .split(";")
        .find((row) => row.trim().startsWith("AKANOMA_LOCALE="))
        ?.split("=")[1];
      if (cookieLocal && (cookieLocal === "en" || cookieLocal === "id")) {
        selectLanguage(cookieLocal as "en" | "id");
      } else {
        const browserLocale =
          typeof navigator !== "undefined" &&
          navigator.language.slice(0, 2) === "id"
            ? "id"
            : "en";
        selectLanguage(browserLocale);
        document.cookie = `AKANOMA_LOCALE=${browserLocale};`;
        router.refresh();
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (lang: "id" | "en") => {
    setCurrentLang(lang);
    setDropdownOpen(false);
    document.cookie = `AKANOMA_LOCALE=${lang};`;
    router.refresh();
  };

  console.log("Current Language:", currentLang);

  return (
    <div className={styles.headerActions}>
      <div className={styles.langSwitcher} ref={dropdownRef}>
        <button
          className={styles.langButton}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {currentLang === "id" ? <IndonesianFlag /> : <EnglishFlag />}
          <span>{currentLang === "id" ? "Bahasa" : "English"}</span>
        </button>
        <div
          className={`${styles.dropdownMenu} ${
            dropdownOpen ? styles.open : ""
          }`}
        >
          <button
            className={styles.dropdownItem}
            onClick={() => selectLanguage("id")}
          >
            <IndonesianFlag />
            <span>Indonesia</span>
          </button>
          <button
            className={styles.dropdownItem}
            onClick={() => selectLanguage("en")}
          >
            <EnglishFlag />
            <span>English</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
