import "./App.css";

function App() {
  const name = "승민";

  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>Hello!</h2>
      <h1>{name}</h1>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>

      <img
        style={{ width: "200px" }}
        src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1623/4517c56afc2c4ed3bcae4ca3376d48033ca56fe8b57f59df5b6df1e9b123.jpg"
        alt="food"
      />
    </>
  );
}

export default App;
