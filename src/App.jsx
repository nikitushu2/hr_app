import './App.css'
import EmployeeList from "./EmployeeList.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import {useState} from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <div className="flex">
      <header>
        <Header />
      </header>
      <main>
        {loggedIn ? (
          <>
          <EmployeeList />
          <div className="logOutButton"><button id="logOut" onClick={() => setLoggedIn(false)}>Log out</button></div>
          </>
          ) : <div className="logInButton"><button id="logIn" onClick={() => setLoggedIn(true)}>Log in</button></div>}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default App
