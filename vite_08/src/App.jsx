import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>

    // <>
    //   <h1>hyy</h1>
    // </>
  );
}

export default App;
