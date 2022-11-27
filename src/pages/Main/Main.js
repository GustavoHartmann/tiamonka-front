import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CategoryDiv, CategorysMenu, Screen } from "./Main.style";
import axios from "axios";

const MainPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    async function getCategoriesData() {
      try {
        const response = await axios.get("https://tiamonka.onrender.com/main");

        setCategoriesList(response.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getCategoriesData();
  }, []);

  return (
    <Screen>
      <Header />
      <h3>Conheça nossos produtos</h3>
      <p>Bolos e biscoitos feitos com muito amor e oração.</p>
      <ion-icon name="flower-outline"></ion-icon>
      <CategorysMenu>
        {categoriesList.map((categoryObj, index) => {
          return (
            <Link key={index} to={`/category/${categoryObj.categoryRoute}`}>
              <CategoryDiv>
                <img
                  alt={`${categoryObj.productCategory} category`}
                  src={categoryObj.backgroundImage}
                />
                <h4>{categoryObj.productCategory}</h4>
              </CategoryDiv>
            </Link>
          );
        })}
      </CategorysMenu>
    </Screen>
  );
};

export default MainPage;
