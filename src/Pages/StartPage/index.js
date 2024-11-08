import React from "react";
import PresentaionSection from "./src/PresentaionSection";
import ServicesSection from "./src/ServicesSection";
import DevelopmentsSection from "./src/DevelopmentsSection";
import FooterLAyout from "../../Layouts/FooterLAyout";
import {
      webSection as webSectionData,
      mobileSection as mobileSectionData,
      desktopSection as desktopSectionData,
      automationSection as automationSectionData,
} from "./src/data";
import WebDashboard from "./src/WebDashboard";
import LazyLoad from "../../Components/LazyLoading";

export default function StartPage() {
      return (
            <main>
                  <PresentaionSection />
                  <ServicesSection />
                  <LazyLoad>
                        <DevelopmentsSection data={webSectionData} />
                  </LazyLoad>
                  {/*      <DevelopmentsSection data={mobileSectionData} />
                  <DevelopmentsSection data={desktopSectionData} />
                  <DevelopmentsSection data={automationSectionData} />*/}
                  <FooterLAyout />
            </main>
      );
}
