import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch("http://localhost:3001/products")
      // fetch("data/products.json")
      //fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((err) => setError("에러가 발생했습니다!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]);
  // checked 값이 변경될 때마다 함수가 실행되도록.

  if (loading) return <p>Loading...</p>;
  // loading 중이면 Loading 문구를
  if (error) return <p>{error}</p>;
  // error가 떴으면 error 문구를
  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
