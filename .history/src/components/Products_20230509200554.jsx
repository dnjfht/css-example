import React, { useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  fetch("data/products.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
      setProducts(data);
    });

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <>
              <li>{product.id}</li>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
