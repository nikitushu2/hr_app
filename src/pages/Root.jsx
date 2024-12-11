import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {useState} from "react";

export default function Root() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (username === "test" && password === "test") {
          setLoggedIn(true);
        } else {
          alert("Invalid credentials");
        }
      }

    return (
        <>
        {loggedIn && username === "test" && password === "test" ? (
          <>
          <Header />
          <Outlet />
          <div className="logOutButton"><button id="logOut" onClick={() => setLoggedIn(false)}>Log out</button></div>
          <Footer />
          </>
          ) : <>
          <p>Log in to see the employees</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username">Username:</label>
            <input name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="logInButton"><button id="logIn" type="submit" onClick={handleLogin}>Log in</button></div>
          </form>
          </>}
        </>
    )
}