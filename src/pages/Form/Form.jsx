import styles from "./Form.module.css";
import {useState} from "react";
import personData from "../../data/data.js";
import useAxios from "../../services/useAxios.js";

export default function Form() {
    const [data, setData] = useState({
        id: 0,
        name: "",
        role: "",
        salary: "",
        startDate: "",
        passion: ""
    })
    const {create, read} = useAxios('http://localhost:3001/');

    function handleClick() {
        read('data')
            .then(response => {
                const id = (Number.parseInt(response[response.length - 1].id) + 1);
                const updatedData = {...data, id: id};
                console.log(updatedData);
                return create(`data`, updatedData);
            })
            .catch(error => console.log(error))
    }

    return (
        <>
        <form className={styles.form} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label htmlFor="name">Name: </label>
            <input className={styles.input} name="name" id="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />

            <label htmlFor="role">Role: </label>
            <input className={styles.input} name="role" id="role" value={data.role} onChange={(e) => setData({...data, role: e.target.value})}/>

            <label htmlFor="salary">Salary: </label>
            <input className={styles.input} name="salary" id="salary" value={data.salary} onChange={(e) => setData({...data, salary: e.target.value})}/>

            <label htmlFor="startDate">Start date: </label>
            <input className={styles.input} name="startDate" id="startDate" value={data.startDate} onChange={(e) => setData({...data, startDate: e.target.value})}/>

            <label htmlFor="passion">Passion: </label>
            <input className={styles.input} name="passion" id="passion" value={data.passion} onChange={(e) => setData({...data, passion: e.target.value})}/>

            <button type="submit" onClick={handleClick}>Add</button>
        </form>
        </>
    )
}