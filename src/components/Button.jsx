export default function Button(props) {
    const {onClick, role, children} = props;
    return <button onClick={onClick} style={
        role === "secondary" ? {backgroundColor: "gray"} : {}
    }>{children}</button>
}