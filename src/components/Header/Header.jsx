import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
        <h1 className={styles.h1}>HR app</h1>
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink></li>
                <li className={styles.li}><NavLink to="/employees" className={({ isActive }) => isActive ? styles.active : ""}>Employees</NavLink></li>
                <li className={styles.li}><NavLink to="/new" className={({ isActive }) => isActive ? styles.active : ""}>Add new</NavLink></li>
            </ul>
        </nav>
        </>
    )
}