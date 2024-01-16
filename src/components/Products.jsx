import { useContext, useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../Contexts/ProductContext";

function Products() {
  const { products, addProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  let showList = true;

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const priceInput = (e) => {
    setPrice(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (title === "") {
      setMessage("Title is required");
    } else if (title.trim().length < 3) {
      setMessage("Please enter more than 3 characters");
    } else {
      let newProduct = { id: uuid(), label: title, price };
      addProduct(newProduct);
      setTitle("");
      setPrice(0);
      setMessage("");
    }
  };


  return (
    <>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="title" className="form-label">Title</label>
          <input id="title"
            value={title}
            onChange={titleInput}
            type="text"
            className="form-control"
          />
          {message && <div className="alert alert-danger">{message}</div>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="price" className="form-label">Price</label>
          <input id="price"
            value={price}
            onChange={priceInput}
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary my-2">Save</button>
      </form>
      <Counter />

      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product id={product.id}>
                <div className="card-body">
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
