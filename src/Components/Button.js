import styled from "styled-components";
import { getFlex } from "../Assets/other/getFlex";
import { orangeGradient } from "../Assets/colors/gredients";

export const Button = styled.button`
      outline: none;
      border: none;
      padding: ${({ $big }) => {
            return $big ? "1.5rem 7rem" : ".7rem 3rem";
      }};
      box-shadow: rgba(255, 255, 255, 0.35) 0px 3px 100px 0px;
      margin-top: ${({ $mt }) => $mt || "10px"};
      border-radius: 10px;
      ${getFlex()};
      color: #fff;
      font-size: ${({ $big }) => {
            return $big ? "2rem" : "1.6rem";
      }};
      font-weight: 700;
      ${orangeGradient}
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
            background: transparent;
            color: #8ecae6;
            transform: translateY(-3px);
      }
`;
