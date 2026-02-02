import Field from './Field'
const Form = ({onClick, filter, handleNewFilter, newName, handleNewName, newNumber, handleNewNumber}) => <>
<form>
        <Field name = "filter shown with" value = {filter} onChange = {handleNewFilter} />
        <Field name = "name" value = {newName} onChange = {handleNewName} />
        <Field name = "number" value = {newNumber} onChange = {handleNewNumber} />
        
        <button onClick = {onClick} type="submit">add</button>
        
      </form>
      </>
export default Form