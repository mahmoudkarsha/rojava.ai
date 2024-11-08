import React from "react";
import { presentaionStyles } from "./styles";
import GraSvg from "../../../Assets/images/start_page/asd.js";
import bg from "../../../Assets/images/start_page/bg.png";
import fixedImage from "../../../Assets/images/start_page/fixed-bg.jpg";
import { Button } from "../../../Components/Button";
import { useGlobals } from "../../../Providers/GlobalsProvider";

const {
      Wrapper,
      PresentationHeader,
      PresentationSubHeader,
      FullPageImageFixed,
      PresentationTextsWrapper,
      PresentaionImageWrapper,
      PresentaionImage,
} = presentaionStyles;

export default function PresentaionSection() {
      const { t } = useGlobals();
      return (
            <Wrapper>
                  <FullPageImageFixed alt={"it-solutions-2"} fetchPriority="hight" src={bg} />
                  <PresentationTextsWrapper>
                        <PresentationHeader
                              initial={{ x: -199, opacity: 0, fontSize: "5rem" }}
                              animate={{ x: 0, opacity: 1, transition: { delay: 0.0, duration: 1 }, fontSize: "9rem" }}
                        >
                              Rojava.ai
                        </PresentationHeader>
                        <PresentationSubHeader
                              style={{ maxWidth: 900 }}
                              initial={{ x: 199, opacity: 0 }}
                              animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
                        >
                              {t(
                                    `Our team can develop custom applications to solve your most difficult data challenges or create insight into key business workflows to optimize productivity.`
                              )}
                        </PresentationSubHeader>
                        <Button $big $mt="50px">
                              {t(`Start Now`)}
                        </Button>
                        <div style={{ display: "flex", gap: 20, marginTop: 80 }}></div>
                  </PresentationTextsWrapper>
                  <PresentaionImageWrapper>
                        <GraSvg />
                  </PresentaionImageWrapper>
            </Wrapper>
      );
}
