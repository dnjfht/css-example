import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="James Kim"
        job="Frontend Developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1535418193292-403b64871181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        name="Suzan Jinny"
        job="Frontend Developer"
      />
      <Profile />
    </>
  );
}

export default App;
