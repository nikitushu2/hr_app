import styles from "./EmployeeCard.module.css";
import {useState, useEffect} from "react";
import Button from "../Button.jsx";
import {useEmployeeStatus} from "../../hooks/useEmployeeStatus.js";
import useAxios from "../../services/useAxios.js";

export default function EmployeeCard(props) {
    const {data, ...rest} = props;
    const [job, setJob] = useState(data.role);
    const [action, setAction] = useState("Promote");
    const [icon, setIcon] = useState("");
    const [mark, setMark] = useState("");
    const [probation, setProbation] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [color, setColor] = useState("");
    const {years, isRecognized, isProbated} = useEmployeeStatus(data.startDate);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {update} = useAxios('https://backend-production-9dda.up.railway.app')


    const [info, setInfo] = useState({title: data.role, salary: data.salary, passion: data.passion});

    const toggleEdit = () => setIsEditing(prev => !prev);

    const handleInfoChange = (key, value) => {
        setInfo({...info, [key]: value})
    }

    useEffect(() => {
        update(`data/${data.id}`, info)
    }, [info])


    useEffect(() => {
        if (isRecognized) {
            setMark("🎉");
        } 
    }, [isRecognized]);

    useEffect(() => {
        if (isProbated) {
            setProbation("🔔");
        } 
    }, [isProbated]);

    function onPromote() {
        if (job === "Team Lead") {
            setJob(data.role);
            setAction("Promote");
            setIcon("");
        } else {
            setJob("Team Lead");
            setAction("Demote");
            setIcon("⭐");
        }
    }

    useEffect(() => {
        if (info.title === "Developer") {
            setColor("#ffc8b4")
        } else if (info.title === "Designer") {
            setColor("#f5ffb4")
        } else if (info.title === "Scientist") {
            setColor("#b4daff")
        } else {
            setColor("#f0b4ff")
        }
    }, [info.title])

    return (
    <>
    { isModalOpen && (
        <div id='myModal' className={styles.modal}>

        <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => setIsModalOpen(false)}>&times;</span>
        <p>Name: {data.name}</p>
        <p>ID: {data.id}</p>
        <p>Title: {data.role}</p>
        <p>Salary: {data.salary}</p>
        <p>Start date: {data.startDate}</p>
        <p>Passion: {data.passion}</p>
        <p>Country: {data.country}</p>
        </div>
    
        </div>
    )}

    <div className={styles.card} {...rest}>
        <div className={styles.topleft} style={{backgroundImage: `url('https://robohash.org/${data.id}?set=set5')`}}></div>
        <div className={styles.triangle} style={{borderColor: `transparent ${color} transparent transparent`}}></div>
        <p><b>{data.name}</b></p>
        {isEditing ?
        <input value={info.title} onChange={(e) => handleInfoChange("title", e.target.value)}/> :
        <p className={styles.job} style={{backgroundColor: color}}>{info.title} {icon}</p>
        }
        {isEditing ?
        <input value={info.salary} onChange={(e) => handleInfoChange("salary", e.target.value)}/> :
        <p>{info.salary}</p>}
        <p>{data.startDate} ({years} years)</p>
        {isEditing ?
        <input value={info.passion} onChange={(e) => handleInfoChange("passion", e.target.value)}/> :
        <p className={styles.passion}>{info.passion}</p>}
        <div className={styles.buttonContainer}>
        <Button onClick={onPromote}>{action}</Button>
        {isEditing ? 
        <Button role="secondary" onClick={toggleEdit}>Save</Button> : 
        <Button role="secondary"  onClick={toggleEdit}>Edit</Button>}
        <Button role="secondary" onClick={() => setIsModalOpen(true)}>Details</Button>
        </div>
        <div className={styles.mark}>{mark}</div>
        <div className={styles.hide1}>Schedule recognition meeting</div>
        <div className={styles.probation}>{probation}</div>
        <div className={styles.hide2}>Schedule probation review</div>
    </div>
    </>
)
}