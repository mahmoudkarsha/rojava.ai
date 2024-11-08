import { css } from "styled-components";

export const createBubbles = function (color1 = "#ffffff22", color2 = "#ffffff22") {
      return css`
            position: relative;
            overflow: hidden;
            &::before {
                  content: "";
                  height: 70%;
                  aspect-ratio: 1;
                  border-radius: 99999px;
                  background-color: ${color1};
                  filter: blur(1px);
                  position: absolute;
                  right: -30px;
                  top: -20px;
                  z-index: -1;
            }
            &::after {
                  content: "";
                  height: 70%;
                  aspect-ratio: 1;
                  border-radius: 50%;
                  background-color: ${color2};
                  filter: blur(1px);
                  position: absolute;
                  right: 30px;
                  top: 100px;
                  z-index: -1;
            }
      `;
};

export const orangeGradient = css`
      background: linear-gradient(to right, #ffec99, #ee87cb, #b060ff);
`;

export const redGradient = css`
      background: rgb(246, 188, 149);
      background: -moz-linear-gradient(94deg, rgba(246, 188, 149, 1) 0%, rgba(240, 134, 148, 1) 100%);
      background: -webkit-linear-gradient(94deg, rgba(246, 188, 149, 1) 0%, rgba(240, 134, 148, 1) 100%);
      background: linear-gradient(94deg, rgba(246, 188, 149, 1) 0%, rgba(240, 134, 148, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f6bc95",endColorstr="#f08694",GradientType=1);
`;

export const blueGradient = css`
      background: rgb(141, 201, 248);
      background: -moz-linear-gradient(94deg, rgba(141, 201, 248, 1) 0%, rgba(55, 150, 231, 1) 100%);
      background: -webkit-linear-gradient(94deg, rgba(141, 201, 248, 1) 0%, rgba(55, 150, 231, 1) 100%);
      background: linear-gradient(94deg, rgba(141, 201, 248, 1) 0%, rgba(55, 150, 231, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8dc9f8",endColorstr="#3796e7",GradientType=1);
`;
export const greenGradient = css`
      background: rgb(126, 216, 208);
      background: -moz-linear-gradient(94deg, rgba(126, 216, 208, 1) 0%, rgba(92, 209, 187, 1) 100%);
      background: -webkit-linear-gradient(94deg, rgba(126, 216, 208, 1) 0%, rgba(92, 209, 187, 1) 100%);
      background: linear-gradient(94deg, rgba(126, 216, 208, 1) 0%, rgba(92, 209, 187, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7ed8d0",endColorstr="#5cd1bb",GradientType=1);
`;

export const whiteGradient = css`
      background: rgb(126, 216, 208);
      background: -moz-linear-gradient(94deg, #f1f1f1 0%, #f9f9f9 100%);
      background: -webkit-linear-gradient(94deg, #f1f1f1 0%, #f9f9f9 100%);
      background: linear-gradient(94deg, #fff 0%, #f8f8f8 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1",endColorstr="#f9f9f9",GradientType=1);
`;

export const pacificGradient = css`
      background: rgb(138, 237, 246);
      background: -moz-linear-gradient(90deg, rgba(138, 237, 246, 1) 0%, rgba(96, 162, 245, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(138, 237, 246, 1) 0%, rgba(96, 162, 245, 1) 100%);
      background: linear-gradient(90deg, rgba(138, 237, 246, 1) 0%, rgba(96, 162, 245, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8aedf6",endColorstr="#60a2f5",GradientType=1);
`;

export const butterflyGradient = css`
      background: rgb(237, 174, 249);
      background: -moz-linear-gradient(90deg, rgba(237, 174, 249, 1) 0%, rgba(129, 177, 250, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(237, 174, 249, 1) 0%, rgba(129, 177, 250, 1) 100%);
      background: linear-gradient(90deg, rgba(237, 174, 249, 1) 0%, rgba(129, 177, 250, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#edaef9",endColorstr="#81b1fa",GradientType=1);
`;

export const crypticGradient = css`
      background: rgb(126, 201, 245);
      background: -moz-linear-gradient(90deg, rgba(126, 201, 245, 1) 0%, rgba(57, 87, 237, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(126, 201, 245, 1) 0%, rgba(57, 87, 237, 1) 100%);
      background: linear-gradient(90deg, rgba(126, 201, 245, 1) 0%, rgba(57, 87, 237, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7ec9f5",endColorstr="#3957ed",GradientType=1);
`;

export const aquaGradient = css`
      background: rgb(101, 244, 205);
      background: -moz-linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      background: linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#65f4cd",endColorstr="#4799e9",GradientType=1);
`;
export const aquaGradientNoBubbles = css`
      background: rgb(101, 244, 205);
      background: -moz-linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      background: linear-gradient(90deg, rgba(101, 244, 205, 1) 0%, rgba(71, 153, 233, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#65f4cd",endColorstr="#4799e9",GradientType=1);
`;

export const metallicaGradient = css`
      background: rgb(160, 181, 235);
      background: -moz-linear-gradient(90deg, rgba(160, 181, 235, 1) 0%, rgba(201, 240, 228, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(160, 181, 235, 1) 0%, rgba(201, 240, 228, 1) 100%);
      background: linear-gradient(90deg, rgba(160, 181, 235, 1) 0%, rgba(201, 240, 228, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a0b5eb",endColorstr="#c9f0e4",GradientType=1);
`;

export const blueBlackGradient = css`
      background: rgb(160, 181, 235);
      background: -moz-linear-gradient(90deg, #8ecae6 0%, #219ebc 100%);
      background: -webkit-linear-gradient(90deg, #8ecae6 0%, #219ebc 100%);
      background: linear-gradient(90deg, #8ecae6 0%, #219ebc 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ecae6",endColorstr="#219ebc",GradientType=1);
      ${createBubbles("#00b4d833", "#ffffff11")}
`;

export const GradientText = css`
      background: linear-gradient(to top right, rgba(126, 201, 245, 1) 0%, rgba(57, 87, 237, 1));
      -webkit-background-clip: text;
      background-clip: none;
      -webkit-text-fill-color: transparent;
`;
