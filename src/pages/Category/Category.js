import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ProductDetails,
  ProductDiv,
  ProductsMenu,
  Screen,
} from "./Category.style";

const Category = () => {
  const { category } = useParams();

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function getCategoryData() {
      try {
        const productsResponse = await axios.get(
          `https://tiamonka.onrender.com/category/${category}`
        );

        setCategoryData(productsResponse.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getCategoryData();
  }, []);

  const GetCategoryTitle = () => {
    switch (category) {
      case "bolosfofos":
        return <h3>Bolos Fofos</h3>;

      case "bolosvulcao":
        return <h3>Bolos Vulcão</h3>;

      case "bolosfruta":
        return <h3>Bolos de Fruta</h3>;

      case "biscoitos":
        return <h3>Biscoitos</h3>;

      default:
        break;
    }
  };

  console.log(categoryData);

  const addToCart = (event) => {
    console.log(event);
  };

  return (
    <Screen>
      <Header />
      <GetCategoryTitle />
      <ion-icon name="flower-outline"></ion-icon>
      <ProductsMenu>
        {categoryData.map((productObj, index) => {
          return (
            <ProductDiv>
              <img
                alt={`${productObj.productName} category`}
                src={productObj.image}
              />
              <ProductDetails>
                <h4>{productObj.productName}</h4>
                <p>{productObj.description}</p>
                <p>
                  <span>
                    Preço:
                    {` R$${productObj.price}`}
                  </span>
                </p>
                <button onClick={() => addToCart(productObj._id)}>
                  Adicionar no carrinho
                </button>
              </ProductDetails>
            </ProductDiv>
          );
        })}
      </ProductsMenu>
    </Screen>
  );
};

export default Category;
