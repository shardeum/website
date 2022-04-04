import { useRouter } from "next/router";
import { ChangeEvent } from "react";

const LanguageSwitcher = () => {
  const {
    push,
    asPath,
    pathname,
    locale, // selected language
  } = useRouter();

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    push(pathname, asPath, { locale: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        alignSelf: "flex-end",
        marginBottom: "1.5rem",
      }}
    >
      <label>Choose a Language:</label>
      <select value={locale} onChange={(e) => handleChangeLanguage(e)}>
        <option value="en">English</option>
        <option value="hi">{"Hindi - हिन्दी"}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
