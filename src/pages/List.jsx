import {useState} from "react";
import '../App.css'
import EmployeeList from "../components/EmployeeList/EmployeeList.jsx";

export default function List() {
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <div className="flex">
      <main>
        <EmployeeList />
      </main>
    </div>
    </>
  )
}