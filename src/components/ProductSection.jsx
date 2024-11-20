import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "./Container";
import products from "../data/product";

const ProductSection = () => {
  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">Available Product Lists</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((products) => (
            <ProductCard key={products.id} products={products} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
