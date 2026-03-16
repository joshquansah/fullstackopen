const Display = ({persons, onClick}) =>
<>
      { persons.map(person => <div key = {person.id}>
        <p>{person.name} {person.number}</p> <button name = {person.name} value = {person.id} onClick = {onClick} type="submit">delete</button>
        </div>
      )}</>
export default Display