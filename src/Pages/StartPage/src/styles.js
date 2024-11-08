import styled from "styled-components";
import { getFlex } from "../../../Assets/other/getFlex";
import { onMidiumMobile, onSmallLaptop, onTablet } from "../../../Assets/other/screenSizes";
import { motion } from "framer-motion";
import { GradientText } from "../../../Assets/colors/gredients";

export const presentaionStyles = {
      Wrapper: styled.div`
            position: relative;
            padding: 100px 4rem;
            border-radius: 40px;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            ${getFlex("space-between", "center")}
            ${onSmallLaptop} {
                  ${getFlex("flex-start", "center", "2rem")}
                  height: auto;
                  min-height: 80vh;
                  padding: 40px 4rem;
            }
            ${onTablet} {
                  padding: 40px 2rem;
            }
      `,

      FullPageImageFixed: styled.img`
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: fixed;
            inset: 0;
            z-index: -2;
            opacity: 1;
            filter: blur(40px);
      `,
      PresentationTextsWrapper: styled.div`
            width: 100%;
            padding-top: 100px;
            ${onTablet} {
                  padding-top: 0px;
            }
      `,
      PresentaionImageWrapper: styled.div`
            padding: 30px;
            height: 100%;
            width: 100%;
            opacity: 0.2;
            display: flex;
            filter: blur(10px);
            align-items: center;
            justify-content: center;
            position: absolute;
            overflow: hidden;
      `,

      PresentationHeader: styled(motion.p)`
            font-size: 7rem;
            font-weight: 900;
            color: #fff;
            ${onTablet} {
                  font-size: 5rem;
            }
            ${onMidiumMobile} {
                  font-size: 4rem;
            }
      `,
      PresentationSubHeader: styled(motion.p)`
            font-size: 2.4rem;
            font-weight: 400;
            margin-top: 2rem;
            color: #fff;
            line-height: 3.9rem;
            ${onTablet} {
                  font-size: 2rem;
            }
      `,
      PresentaionImage: styled(motion.img)`
            width: 100%;
            max-width: 600px;
            z-index: 2;
      `,
};

export const servicesSectionStyles = {
      Wrapper: styled.div`
            height: 100vh;
            position: relative;
            padding-top: 10rem;
            background-color: #ffffffdd;
            ${getFlex("center", "center", "1rem", "column")};
      `,
      SectionHeader: styled(motion.p)`
            font-size: 4.5rem;
            font-weight: 600;
            ${GradientText}
            max-width: 1100px;
      `,
      SectionSubHeader: styled(motion.p)`
            font-size: 2.4rem;
            font-weight: 400;
            text-align: center;
            color: #333;
            line-height: 3.5rem;
            max-width: 1100px;
            padding: 40px 10px;
            border-radius: 10px;
      `,
};

export const developmentsSectionStyles = {
      Wrapper: styled.div`
            min-height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: "center";
            padding: 2rem 6rem 2rem 6rem;
            background-color: #fffffffa;
            ${onTablet} {
                  padding: 10rem 2rem;
            }
      `,
      SectionHeader: styled(motion.p)`
            font-size: 3.5rem;
            font-weight: 600;
            ${GradientText}
            max-width: 1100px;
      `,
      SectionSubHeader: styled(motion.p)`
            font-size: 2.1rem;
            font-weight: 400;
            color: #425066;
            line-height: 3.5rem;
            max-width: 1100px;
            margin-top: 2rem;
            line-break: normal;
      `,
      SectionImage: styled(motion.img)`
            width: 100%;
      `,
      FeatureCard: styled(motion.div)`
            padding: 10px 20px;
            border-radius: 35px;
            display: flex;
            align-items: center;
            gap: 2rem;
            color: #fff;
            background: #bde0fe99;
      `,
      FeatureCardHeader: styled.div`
            font-size: 1.7rem;
            font-weight: 600;
            color: #666;
            margin-top: 0rem;
            line-break: normal;
      `,
};
