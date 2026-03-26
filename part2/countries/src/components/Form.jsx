const Form = ({ name, value, handleChange}) => {

    return(
        <>
        <form >
            {name}<input value = {value} onChange={handleChange} />
        </form>
        </>
        
    )
}
export default Form