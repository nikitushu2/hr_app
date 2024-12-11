import styles from "./EmployeeCard.module.css";
import {useState, useEffect} from "react";
import Button from "../Button.jsx";
import {useEmployeeStatus} from "../../hooks/useEmployeeStatus.js";

export default function EmployeeCard(props) {
    const {name, role, salary, startDate, passion, index, ...rest} = props;
    const [job, setJob] = useState(role);
    const [action, setAction] = useState("Promote");
    const [icon, setIcon] = useState("");
    const [mark, setMark] = useState("");
    const [probation, setProbation] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [color, setColor] = useState("");
    const {years, isRecognized, isProbated} = useEmployeeStatus(startDate);


    const [info, setInfo] = useState({title: role, salary: salary, passion: passion});

    const toggleEdit = () => setIsEditing(prev => !prev);

    const handleInfoChange = (key, value) => setInfo({...info, [key]: value})


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
            setJob(role);
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
    <div className={styles.card} {...rest}>
        <div className={styles.topleft} style={{backgroundImage: `url('https://robohash.org/${index}?set=set5')`}}></div>
        <p><b>{name}</b></p>
        {isEditing ?
        <input value={info.title} onChange={(e) => handleInfoChange("title", e.target.value)}/> :
        <p className={styles.job} style={{backgroundColor: color}}>{info.title} {icon}</p>
        }
        {isEditing ?
        <input value={info.salary} onChange={(e) => handleInfoChange("salary", e.target.value)}/> :
        <p>{info.salary}</p>}
        <p>{startDate} ({years} years)</p>
        {isEditing ?
        <input value={info.passion} onChange={(e) => handleInfoChange("passion", e.target.value)}/> :
        <p className={styles.passion}>{info.passion}</p>}
        <Button onClick={onPromote}>{action}</Button>
        {isEditing ? 
        <Button role="secondary" onClick={toggleEdit}>Save</Button> : 
        <Button role="secondary" onClick={toggleEdit}>Edit</Button>}
        <div className={styles.mark}>{mark}</div>
        <div className={styles.hide1}>Schedule recognition meeting</div>
        <div className={styles.probation}>{probation}</div>
        <div className={styles.hide2}>Schedule probation review</div>
    </div>
)
}