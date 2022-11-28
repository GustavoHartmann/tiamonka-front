import styled from "styled-components";
import {
  LIGHTER_THEME_COLOR,
  THEME_COLOR,
  WHITE,
} from "../../assets/constants";

export const CartDiv = styled.div`
  display: flex;
  align-items: center;

  button {
    color: ${WHITE};

    font-size: 17px;
    font-weight: 700;

    background-color: ${THEME_COLOR};

    border: none;
  }

  > ion-icon {
    font-size: 30px;
    color: ${WHITE};
  }

  :hover {
    button,
    ion-icon {
      color: ${LIGHTER_THEME_COLOR};
    }
  }
`;

export const DropdownCart = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownCartProducts = styled.div`
  width: 100vw;
  height: 100vh;

  visibility: ${(props) => (props.cartVisibility ? "visible" : "hidden")};
  position: fixed;

  top: 0;
  left: 0;

  transition: visibility 0.3s, opacity 0.3s linear;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const CartDisplay = styled.div`
  width: 400px;
  height: 100vh;

  background-color: ${WHITE};

  transform: ${(props) => (props.cartVisibility ? "" : "translateX(400px)")};

  overflow-y: scroll;
  transition: all 1s;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: fixed;
  top: 0;
  right: 0;

  h4 {
    color: ${THEME_COLOR};

    font-weight: 700;
    font-size: 60px;

    font-family: "Nerko One", cursive;
  }

  a {
    color: ${WHITE};
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    margin-block: 18px;

    :hover {
      background-color: ${WHITE};
    }
  }
`;

export const CartProductsUl = styled.ul`
  width: 100%;
  height: 350px;

  overflow-y: scroll;
`;

export const ProductCard = styled.li`
  width: 100%;
  height: 120px;

  padding: 10px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: ${LIGHTER_THEME_COLOR};

  border-bottom: 2px solid black;

  > img {
    height: 100px;
    width: 100px;
    object-fit: cover;

    border-radius: 100%;

    margin: 0;
  }

  p {
    font-weight: 700;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 200px;
  height: 100%;

  p {
    font-size: 17px;

    text-overflow: ellipsis;
  }
`;

export const QuantityController = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-around;

  > * {
    margin-right: 8px;
  }

  button {
    :first-child {
      background-color: red;
    }

    :nth-child(3) {
      background-color: green;
    }

    border: none;

    width: 30px;
    height: 30px;

    border-radius: 100%;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
