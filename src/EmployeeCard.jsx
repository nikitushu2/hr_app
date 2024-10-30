import "./EmployeeCard.css";
import {useState} from "react";

export default function EmployeeCard(props) {
    const {name, role, salary, passion, ...rest} = props;
    const [job, setJob] = useState(props.role);
    const [action, setAction] = useState("Promote");

    function onPromote() {
        if (job === "team lead") {
            setJob(role);
            setAction("Promote");
        } else {
            setJob("team lead");
            setAction("Demote");
        }
    }

    return (
    <div className="card" {...rest}>
        <p><b>Name:</b> {name}</p>
        <p><b>Role:</b> {job}</p>
        <p><b>Salary:</b> {salary}</p>
        <p><b>Passion:</b> {passion}</p>
        <button onClick={onPromote}>{action}</button>
    </div>
)
}