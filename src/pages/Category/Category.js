import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const { category } = useParams();

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function getCategoryData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/category/${category}`
        );

        setCategoryData(response.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getCategoryData();
  }, []);

  console.log(categoryData);

  return (
    <>
      <Header />
    </>
  );
};

export default Category;
