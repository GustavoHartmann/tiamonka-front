import styled from "styled-components";
import { LIGHTER_THEME_COLOR, THEME_COLOR } from "../../assets/constants";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  overflow: ${(props) => (props.cartVisibility ? "hidden" : "auto")};
  padding-right: ${(props) => (props.cartVisibility ? "17px" : "")};

  > h3 {
    font-weight: 700;
    font-size: 60px;

    font-family: "Nerko One", cursive;

    margin-top: 130px;
  }

  > p {
    font-size: 18px;
    line-height: 80px;
    font-weight: 500;
  }

  > ion-icon {
    font-size: 30px;
    color: ${THEME_COLOR};

    margin-block: 20px;
  }
`;

export const ProductsMenu = styled.div`
  width: 950px;

  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: auto;

  margin-top: 30px;
`;

export const ProductDiv = styled.div`
  position: relative;
  width: 300px;
  height: 400px;

  border-radius: 10px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;

  img {
    object-fit: cover;

    padding: 5px;

    transition: all;
    transition-duration: 0.3s;

    width: 100%;
    height: 50%;
  }
`;

export const ProductDetails = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 5px;

  h4 {
    font-size: 22px;
    font-weight: 700;

    text-align: end;

    color: #000000;

    text-decoration: underline solid ${THEME_COLOR} 3px;
  }

  p {
    font-size: 16px;

    text-align: center;

    line-height: normal;

    color: #000000;

    text-decoration: none;

    span {
      font-weight: 700;
    }
  }

  button {
    border: none;
    border-radius: 10px;

    background-color: ${LIGHTER_THEME_COLOR};

    width: 60%;
    height: 50px;
    margin-inline: auto;

    font-weight: 700;

    cursor: pointer;
  }
`;
