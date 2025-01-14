export const Habit = (props) =>{
    return(
        <>
            <h2 className="text-3xl font-bold">{props.habitName}</h2>
            <h3>Streak: {props.streak}</h3>
        </>
    
)
}

