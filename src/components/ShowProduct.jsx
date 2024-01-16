import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

import { useContext, useState } from "react";

const ShowProduct = () => {
  const { products } = useContext(ProductContext);
  const myParams = useParams();
  const myProduct = products.find((product) => product.id === +myParams.id);
  const [product] = useState(myProduct);

  const navigate = useNavigate();

  // setProduct(myProduct);

  if (+myParams.id === 404) {
    console.log(myParams);
    return <h1>404 ------ 404</h1>;
  }

  const redirectHome = () => {
    navigate("/");
  };
  const redirectContact = () => {
    navigate("/contact");
  };
  const redirectAbout = () => {
    navigate("/about");
  };
  const showProduct = () => {
    navigate("/showProduct");
  };

  return (
    <>
      <div className="my-5">
        <h1>{product.label}</h1>
        <button className="btn btn-outline-info">{product.price}</button>
      </div>

      <button onClick={redirectHome} className="btn btn-success m-2">
        go to Home
      </button>
      <button onClick={redirectAbout} className="btn btn-success m-2">
        go to About
      </button>
      <button onClick={redirectContact} className="btn btn-success m-2">
        go to Contact
      </button>
      <button onClick={showProduct} className="btn btn-success m-2">
        Show my product
      </button>
    </>
  );
};

export default ShowProduct;
