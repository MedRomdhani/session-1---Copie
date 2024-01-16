import "./App.css";
import { ProductProvider } from "./Contexts/ProductContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ErrorPage from "./components/errorPage";
import ShowProduct from "./components/showProduct";
import ArticleList from "./articles/ArticleList";
import ArticleProvider from "./articles/ArticleProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ShowProduct />} />
            <Route path="/showProduct" element={<ShowProduct />} />
            <Route path="/blog" element={<ArticleProvider><ArticleList /></ArticleProvider>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
