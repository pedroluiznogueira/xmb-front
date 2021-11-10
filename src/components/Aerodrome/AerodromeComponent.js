import React, { useEffect, useState } from "react";
import { getAerodromes } from "../../services/AerodromeService";
import "./AerodromeComponent.css";
import Axios from "axios";
import HeaderComponent from "../Header/HeaderComponent";

function AerodromeComponent(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://udeyou.s3.sa-east-1.amazonaws.com/" + props.filename
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className="container">
        {products.map((product) => (
          <>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Created_at</th>
                <th>Description</th>
                <th>Designation</th>
                <th>Width</th>
                <th>Length</th>
              </tr>
              <tr>
                <td>{product.name}</td>
                <td>{product.city}</td>
                <td>{product.created_at}</td>
                <td>{product.description}</td>
                <>
                  {product.runways.map((r) => (
                    <>
                      <td>{r.designation}</td>
                      <td>{r.width}</td>
                      <td>{r.length}</td>
                    </>
                  ))}
                </>
              </tr>
            </table>
          </>
        ))}
      </div>
    </>
  );
}

export default AerodromeComponent;
