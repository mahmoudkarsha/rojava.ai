import React, { useContext, useState, createContext } from "react";
import { arabic, english, kurdishSoran, german, kurdishLatin } from "../Assets/translations";

const GlobalsContext = createContext({
      theme: "light",
      language: "english",
      //
      toggleTheme: function (theme) {},
      t: function (sentence) {},
      changeLanguage: function (language) {},
});

export const useGlobals = () => useContext(GlobalsContext);

export default function GlobalsProvider({ children }) {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("english");
      const [sentences, setSentences] = useState(english);

      function toggleTheme() {
            setTheme(theme === "light" ? "dark" : "light");
      }
      function changeLanguage(language) {
            switch (language) {
                  case "english":
                        setSentences(english);
                        break;
                  case "arabic":
                        setSentences(arabic);
                        break;
                  case "german":
                        setSentences(german);
                        break;
                  case "kurdi_sorani":
                        console.log("sorani");
                        console.log(kurdishSoran);
                        setSentences(kurdishSoran);
                        break;
                  case "kurdi_latin":
                        setSentences(kurdishLatin);
                        break;
                  default:
            }

            setLanguage(language);
      }

      function t(sentense) {
            return sentences[sentense];
      }
      return <GlobalsContext.Provider value={{ theme, language, toggleTheme, changeLanguage, t }}>{children}</GlobalsContext.Provider>;
}
