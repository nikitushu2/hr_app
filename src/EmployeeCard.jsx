import "./EmployeeCard.css";
import {useState, useEffect} from "react";

export default function EmployeeCard(props) {
    const {name, role, salary, startDate, passion, ...rest} = props;
    const [job, setJob] = useState(props.role);
    const [action, setAction] = useState("Promote");
    const [icon, setIcon] = useState("");
    const [mark, setMark] = useState("");
    const [probation, setProbation] = useState("");

    const currDate = new Date()
    const years = currDate.getFullYear() - new Date(startDate).getFullYear();
    const isRecognized = (years % 5 === 0) && (years != 0);
    const monthDiff = currDate.getMonth() - new Date(startDate).getMonth();
    const months = years * 12 + monthDiff;
    const isProbated = months < 6;

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

    return (
    <div className="card" {...rest}>
        <p>{name}</p>
        <p>{job} {icon}</p>
        <p>{salary}</p>
        <p>{startDate}</p>
        <p>{years} years</p>
        <p>{passion}</p>
        <button onClick={onPromote}>{action}</button>
        <div className="mark">{mark}</div>
        <div className="hide1">Schedule recognition meeting</div>
        <div className="probation">{probation}</div>
        <div className="hide2">Schedule probation review</div>
    </div>
)
}