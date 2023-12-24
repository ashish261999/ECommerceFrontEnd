import React, { useEffect } from "react";
import Banner from "../components/banner";
import Product from "../components/products";
import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setproducts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
      );
      setproducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <Product products={products} />
    </div>
  );
};
export default Home;
