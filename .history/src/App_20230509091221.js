import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="James Kim"
        job="Frontend developer"
      />
      <Profile />
      <Profile />
    </>
  );
}

export default App;
