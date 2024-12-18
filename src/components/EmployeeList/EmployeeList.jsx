import styles from "./EmployeeList.module.css"
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx"
//import data from "./data/data.js";
import {useState, useEffect} from "react";
import useAxios from "../../services/useAxios.js";

export default function EmployeeList() {
    const [persons, setPersons] = useState([]);
    const {read} = useAxios('https://backend-production-9dda.up.railway.app/')
    
    useEffect(() => {
        read("data")
            .then(data => {
                setPersons(data);
            })
    }, [])

    if (persons) {
        return (
            <>
                <div className={styles.container} style={{marginBottom: '15px'}}>
                    {persons.map((obj, index) => (
                        
                        <EmployeeCard key={obj.id} data={{id: obj.id, name: obj.name, role: obj.role, salary: obj.salary, startDate: obj.startDate, passion: obj.passion, country: obj.country, index: index}}/>
                    ))}
                </div>
            </>
        )
    }
}