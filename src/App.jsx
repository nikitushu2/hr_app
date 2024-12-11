import './App.css'
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"
import {useState} from "react";

import { RouterProvider } from 'react-router-dom';
import {router} from "./routes/appRoutes.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <RouterProvider router={router} future={{
        v7_startTransition: true,
      }}/>
    </>
  )
}

export default App
