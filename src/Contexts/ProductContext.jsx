import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      label: "iphone",
      price: 4000,
    },
    {
      id: 2,
      label: "samsung",
      price: 2000,
    },
    {
      id: 3,
      label: "Vivo",
      price: 1600,
    },
  ]);
  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);
    setProducts(myList);
  };

  const addProduct = (item) => {
    setProducts([item, ...products]);
  }
  return (
    <ProductContext.Provider
      value={{ title: "PinguCoder", message: "mohamed", products, setProducts, deleteProduct, addProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
