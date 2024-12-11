export function useEmployeeStatus(props) {

    const startDate = props;

    const currDate = new Date()
    const years = currDate.getFullYear() - new Date(startDate).getFullYear();

    const isRecognized = (years % 5 === 0) && (years != 0);
    const monthDiff = currDate.getMonth() - new Date(startDate).getMonth();
    const months = years * 12 + monthDiff;
    const isProbated = months < 6;


    return { years, isRecognized, isProbated };
}