import "./EmployeeList.css"
import EmployeeCard from "./EmployeeCard.jsx"

export default function EmployeeList() {
    return (
        <>
            <div className="container">
                <EmployeeCard name="Nikita" role="developer" salary="2700$" passion="coding"/>
                <EmployeeCard name="Mark" role="developer" salary="2500$" passion="cars"/>
                <EmployeeCard name="Semyon" role="developer" salary="2300$" passion="design"/>
            </div>
        </>
    )
}