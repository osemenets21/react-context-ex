import React, { useState, useEffect, useMemo } from "react";
type Product = {
  id: number;
  title: string;
  price: number;
  count: number;
};
export const Post = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Nowy stan do przechowywania frazy wyszukiwania
  const editArry = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newCount = +event.target.value;
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: newCount } : product
      )
    );
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=10`);
        if (!response.ok) throw new Error("Something went wrong");
        const { products } = await response.json();
        const productsWithCount = products.map((product: Product) => ({
          ...product,
          count: 1,
        }));
        setProducts(productsWithCount);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const sumOfProducts = useMemo(() => {
    return products.reduce((total, product) => {
      return total + product.count * product.price;
    }, 0);
  }, [products]);
  // Filtruj produkty na podstawie wprowadzonej frazy
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <label htmlFor="search">
        Wyszukaj produkt:
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <ul>
        {filteredProducts.map(({ id, title, price, count }, index) => {
          return (
            <li key={id || index}>
              {id}. Title: {title} / Price: {price}{" "}
              <input
                type="number"
                value={count}
                onChange={(event) => editArry(event, id)}
                placeholder="count of product"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Post;