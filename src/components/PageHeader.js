import { Link } from "react-router-dom";
import styled from "styled-components";
import { LIGHTER_THEME_COLOR, THEME_COLOR, WHITE } from "../assets/constants";

const PageHeader = () => {
  localStorage.setItem("authToken", ""); //TODO este localStorage deve ser setado na tela de login

  const authToken = localStorage.getItem("authToken");

  const username = "Pedro"; //TODO este username deve ser recebido dinamicamente a partir do login do usuario

  const prodcutList = [
    { productCategory: "Bolos Fofos", categoryRoute: "products/bolosfofos" },
    { productCategory: "Bolos Vulcão", categoryRoute: "products/bolosvulcao" },
    { productCategory: "Biscoitos", categoryRoute: "products/biscoitos" },
  ]; //TODO esta lista de produtos deve ser recebida dinamicamente pelo BackEnd

  return (
    <TopBar>
      <LeftMenu>
        <Link to="/about">Quem Somos</Link>
        <DropdownProductsMenu>
          <ProductsDiv>
            <Link to="/products">Produtos</Link>
            <DownArrow />
          </ProductsDiv>
          <DropdownCategoriesMenu>
            {prodcutList.map((obj) => {
              return <Link to={obj.categoryRoute}>{obj.productCategory}</Link>;
            })}
          </DropdownCategoriesMenu>
        </DropdownProductsMenu>
      </LeftMenu>
      <Link to="/">
        <img
          alt="Logo da loja tia monka"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f80861107612119.5faafcf40b849.jpg"
        ></img>
      </Link>
      {!authToken ? (
        <RightMenu>
          <Link to="/signin">Faça Login</Link>
          <Link to="/signup">Cadastre-se</Link>
        </RightMenu>
      ) : (
        <RightMenu>
          <Link to="/profile">Bem vindo(a), {username}!</Link>
          <Link to="/cart">
            <Cart>
              <p>Carrinho</p>
              <ion-icon name="cart-outline"></ion-icon>
            </Cart>
          </Link>
        </RightMenu>
      )}
    </TopBar>
  );
};

export default PageHeader;

//Styled Components

const TopBar = styled.div`
  height: 130px;
  width: 100%;
  background-color: ${THEME_COLOR};

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
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

    text-decoration: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ProductsDiv = styled.div`
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

const DownArrow = styled.i`
  border: solid ${WHITE};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);

  margin-left: 5px;

  cursor: pointer;
`;

const DropdownProductsMenu = styled.div`
  position: relative;
  display: inline-block;

  :hover {
    div {
      display: block;
    }
  }
`;

const DropdownCategoriesMenu = styled.div`
  display: none;
  position: absolute;
  background-color: ${LIGHTER_THEME_COLOR};
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

const LeftMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;

  :hover {
    a,
    ion-icon {
      color: ${LIGHTER_THEME_COLOR};
    }
  }

  a {
    color: ${WHITE};

    font-size: 17px;
    font-weight: 700;

    text-decoration: none;
  }

  ion-icon {
    font-size: 30px;
    color: ${WHITE};
  }
`;
