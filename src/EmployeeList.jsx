import "./EmployeeList.css"
import EmployeeCard from "./EmployeeCard.jsx"
import data from "./data/data.js";

export default function EmployeeList() {

    return (
        <>
            <div className="container">
                {data.map((obj, index) => (
                    
                    <EmployeeCard key={obj.id} name={obj.name} role={obj.role} salary={obj.salary} startDate={obj.startDate} passion={obj.passion} index={index}/>
                ))}
            </div>
        </>
    )
}