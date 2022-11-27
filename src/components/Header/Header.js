import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Cart,
  DownArrow,
  DropdownCategoriesMenu,
  DropdownProductsMenu,
  LeftMenu,
  ProductsDiv,
  RightMenu,
  TopBar,
} from "./Header.style";

const PageHeader = () => {
  localStorage.setItem("authToken", ""); //TODO este localStorage deve ser setado na tela de login

  const authToken = localStorage.getItem("authToken");

  const username = "Pedro"; //TODO este username deve ser recebido dinamicamente a partir do login do usuario

  const [productList, setProductList] = useState([{}]);

  useEffect(() => {
    async function getProductsData() {
      try {
        const response = await axios.get("https://tiamonka.onrender.com/main");

        setProductList(response.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getProductsData();
  }, []);

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
            {productList.map((obj, index) => {
              return (
                <Link key={index} to={`products/${obj.categoryRoute}`}>
                  {obj.productCategory}
                </Link>
              );
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
      <RightMenu>
        {!authToken ? (
          <>
            <Link to="/signin">Faça Login</Link>
            <Link to="/signup">Cadastre-se</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Bem vindo(a), {username}!</Link>
            <Link to="/cart">
              <Cart>
                <p>Carrinho</p>
                <ion-icon name="cart-outline"></ion-icon>
              </Cart>
            </Link>
          </>
        )}
      </RightMenu>
    </TopBar>
  );
};

export default PageHeader;
