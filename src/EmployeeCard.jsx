import "./EmployeeCard.css";
import {useState} from "react";

export default function EmployeeCard(props) {
    const {name, role, salary, startDate, passion, ...rest} = props;
    const [job, setJob] = useState(props.role);
    const [action, setAction] = useState("Promote");
    const [icon, setIcon] = useState("")

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
        <p><b>Name:</b> {name}</p>
        <p><b>Role:</b> {job} {icon}</p>
        <p><b>Salary:</b> {salary}</p>
        <p><b>Start date:</b> {startDate}</p>
        <p><b>Passion:</b> {passion}</p>
        <button onClick={onPromote}>{action}</button>
    </div>
)
}