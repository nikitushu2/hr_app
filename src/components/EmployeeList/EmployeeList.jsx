import styles from "./EmployeeList.module.css"
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx"
//import data from "./data/data.js";
import {useState, useEffect} from "react";
import useAxios from "../../services/useAxios.js";

export default function EmployeeList() {
    const [persons, setPersons] = useState([]);
    const {read} = useAxios('http://localhost:3001/')
    
    useEffect(() => {
        read("data")
            .then(data => {
                setPersons(data);
            })
    }, [])

    if (persons) {
        return (
            <>
                <div className={styles.container}>
                    {persons.map((obj, index) => (
                        
                        <EmployeeCard key={obj.id} name={obj.name} role={obj.role} salary={obj.salary} startDate={obj.startDate} passion={obj.passion} index={index}/>
                    ))}
                </div>
            </>
        )
    }
}