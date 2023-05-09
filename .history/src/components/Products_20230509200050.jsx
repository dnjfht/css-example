import React, { useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

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
