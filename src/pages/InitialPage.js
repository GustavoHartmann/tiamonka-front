import styled from "styled-components";
import { THEME_COLOR, WHITE } from "../assets/constants";
import PageHeader from "../components/PageHeader";

const InitialPage = () => {
  const productsCategoriesList = [
    {
      productCategory: "Bolos Fofos",
      categoryRoute: "products/bolosfofos",
      backgroundImage:
        "https://i.ibb.co/nBr310F/100979645-249760146278042-1493447802513560784-n.jpg",
    },
    {
      productCategory: "Bolos Vulcão",
      categoryRoute: "products/bolosvulcao",
      backgroundImage:
        "https://i.ibb.co/1YNDt7J/143475162-135159111777363-2094887013059700048-n.jpg",
    },
    {
      productCategory: "Bolos Frutas",
      categoryRoute: "products/bolosfrutas",
      backgroundImage:
        "https://i.ibb.co/7N1hT40/137037002-756732988270707-4828819766673618248-n.jpg",
    },
    {
      productCategory: "Biscoitos",
      categoryRoute: "products/biscoitos",
      backgroundImage:
        "https://i.ibb.co/wM1y5bb/14583249-1697625033897644-1098471953632591872-n.jpg",
    },
  ];

  return (
    <Screen>
      <PageHeader />
      <h3>Conheça nossos produtos</h3>
      <p>Bolos e biscoitos feitos com muito amor e oração.</p>
      <ion-icon name="flower-outline"></ion-icon>
      <CategorysMenu>
        {productsCategoriesList.map((categoryObj, index) => {
          return (
            <CategoryDiv key={index}>
              <img src={categoryObj.backgroundImage} />
              <h4>{categoryObj.productCategory}</h4>
            </CategoryDiv>
          );
        })}
      </CategorysMenu>
    </Screen>
  );
};

export default InitialPage;

// Styled comnponents
const Screen = styled.div`
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

  ion-icon {
    font-size: 30px;
    color: ${THEME_COLOR};
  }
`;

const CategorysMenu = styled.div`
  width: 900px;

  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: auto;

  margin-top: 30px;
`;

const CategoryDiv = styled.div`
  position: relative;
  width: 400px;
  height: 300px;

  border-radius: 10px;

  cursor: pointer;

  transition: all;
  transition-duration: 1s;

  margin-bottom: 30px;

  :hover {
    img {
      filter: brightness(100%);
    }
  }

  img {
    object-fit: cover;

    border-radius: 10px;

    transition: all;
    transition-duration: 0.5s;

    width: 100%;
    height: 100%;

    filter: brightness(50%);
  }

  h4 {
    position: absolute;
    bottom: 0;
    right: 0;

    padding: 12px;

    color: ${WHITE};

    font-size: 50px;
  }
`;
