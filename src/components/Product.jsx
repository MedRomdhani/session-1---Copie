// import Proptypes from "prop-types";
import { ProductContext } from "../Contexts/ProductContext";
import { useContext } from "react";

const Product = ({children, id}) => {
  const {deleteProduct} = useContext(ProductContext)
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">{children}</div>
        </div>
        <button className="btn btn-dark" onClick={() => deleteProduct(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

// Product.Proptypes = {
//   label: Proptypes.string,
//   price: Proptypes.number.isRequired
// };

// Product.defaultProps = {
//   label: "My price",
//    price: 0
// };

export default Product;
