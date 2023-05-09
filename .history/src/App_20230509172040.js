import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div
      style={{
        width: 300,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(event);
        }}
      >
        버튼
      </button>
      <Profile
        image="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="James Kim"
        job="Frontend Developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1535418193292-403b64871181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        name="Suzan Jinny"
        job="Frontend Developer"
        isNew={false}
      />
      <Profile
        image="https://images.unsplash.com/photo-1508285296015-c0b524447532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
        name="Tiffany"
        job="Web Designer"
        isNew={true}
      />
    </div>
  );
}

export default App;
