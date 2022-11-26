import styled from "styled-components";
import { THEME_COLOR, WHITE } from "../../assets/constants";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 50px;

    margin-top: 130px;
  }

  p {
    font-size: 18px;
    line-height: 80px;
    font-weight: 500;
  }

  > ion-icon {
    font-size: 30px;
    color: ${THEME_COLOR};
  }
`;

export const CategorysMenu = styled.div`
  width: 900px;

  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: auto;

  margin-top: 30px;
`;

export const CategoryDiv = styled.div`
  position: relative;
  width: 400px;
  height: 300px;

  border-radius: 10px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);

  cursor: pointer;

  transition: all;
  transition-duration: 1s;

  margin-bottom: 30px;

  :hover {
    img {
      filter: brightness(100%);
      transform: scale(1.05);
    }
    h4 {
      bottom: 10px;
      transform: scale(1.05);
    }
  }

  img {
    object-fit: cover;

    border-radius: 10px;

    transition: all;
    transition-duration: 0.3s;

    width: 100%;
    height: 100%;

    filter: brightness(50%);
  }

  h4 {
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;

    transition: all;
    transition-duration: 0.3s;

    padding: 12px;

    color: ${WHITE};

    font-size: 50px;
  }
`;
