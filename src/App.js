import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import NavLayout from "./Layouts/NavLayout";
import styled, { createGlobalStyle } from "styled-components";
import { useGlobals } from "./Providers/GlobalsProvider";
import { onSmallLaptop, onTablet } from "./Assets/other/screenSizes";
const rtlLangs = ["arabic", "kurdi_sorani", "kurdish_latin"];
const arabicFontLangs = ["arabic", "kurdi_sorani"];
const GlobalStyle = createGlobalStyle`
        * {
                box-sizing: border-box;
                margin: 0px;
                user-select: none;
                padding: 0px;
                font-family: ${({ $language }) => (arabicFontLangs.includes($language) ? "Amiri" : "Roboto")} ;
                direction: ${({ $language }) => (rtlLangs.includes($language) ? "rtl" : "ltr")} ;
        }
        :root{
                font-size: 10px;
        }
        a {
          text-decoration: none;
          
        }
      
        ${onSmallLaptop} {
                                :root {
                                        font-size: 7px;
                                }
                       
                        }
        ${onTablet} {
                                :root {
                                        font-size: 7px;
                                }
                    
                        }
`;

const Main = styled.main`
      max-width: 100vw;
      overflow: clip;
      padding: 30px;
      padding-top: 120px;
      padding-bottom: 0px;

      ${onSmallLaptop} {
            padding: 20px;
            padding-top: 80px;
            padding-bottom: 0px;
      }

      ${onTablet} {
            padding: 0px;
            padding-top: 80px;
            padding-bottom: 0px;
      }
`;
function App() {
      const { language } = useGlobals();
      return (
            <>
                  <GlobalStyle $language={language} />
                  <Main>
                        <BrowserRouter>
                              <NavLayout />
                              <Routes>
                                    <Route path="/" element={<StartPage />} />
                              </Routes>
                        </BrowserRouter>
                  </Main>
            </>
      );
}

export default App;
