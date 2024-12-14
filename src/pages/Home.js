import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on the selected category
  const filteredProducts = products.filter((item) => {
    if (selectedCategory === "all") {
      return true;
    }
    return item.category === selectedCategory;
  });

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="flex justify-center gap-10 my-16">
            {/* Category buttons */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`hover:underline ${selectedCategory === "all" ? "font-bold" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("men's clothing")}
              className={`hover:underline ${selectedCategory === "men's clothing" ? "font-bold" : ""}`}
            >
              Men
            </button>
            <button
              onClick={() => setSelectedCategory("women's clothing")}
              className={`hover:underline ${selectedCategory === "women's clothing" ? "font-bold" : ""}`}
            >
              Women
            </button>
            <button
              onClick={() => setSelectedCategory("jewelery")}
              className={`hover:underline ${selectedCategory === "jewelery" ? "font-bold" : ""}`}
            >
              Jewelery
            </button>

            <button
              onClick={() => setSelectedCategory("electronics")}
              className={`hover:underline ${selectedCategory === "electronics" ? "font-bold" : ""}`}
            >
              Electronics
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
