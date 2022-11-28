import styled from "styled-components";
import {
  LIGHTER_THEME_COLOR,
  THEME_COLOR,
  WHITE,
} from "../../assets/constants";

export const TopBar = styled.div`
  height: 130px;
  width: 100%;
  background-color: ${THEME_COLOR};

  display: flex;
  justify-content: space-around;
  align-items: center;

  > img {
    width: 350px;

    margin-top: 80px;

    border-radius: 100%;
  }

  a {
    color: ${WHITE};

    font-size: 17px;
    font-weight: 700;

    :hover {
      color: ${LIGHTER_THEME_COLOR};
    }

    p {
      color: ${WHITE};

      font-size: 17px;
      font-weight: 700;
    }

    text-decoration: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ProductsDiv = styled.div`
  display: flex;
  align-items: center;

  :hover {
    i {
      border: solid ${LIGHTER_THEME_COLOR};
      border-width: 0 3px 3px 0;
    }

    a {
      color: ${LIGHTER_THEME_COLOR};
    }
  }
`;

export const DownArrow = styled.i`
  border: solid ${WHITE};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);

  margin-left: 5px;

  cursor: pointer;
`;

export const DropdownProductsMenu = styled.div`
  position: relative;
  display: inline-block;

  :hover {
    div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const DropdownCategoriesMenu = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: ${LIGHTER_THEME_COLOR};

  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s linear;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  border-radius: 15px;

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

export const LeftMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
