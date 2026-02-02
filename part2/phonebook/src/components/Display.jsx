const Display = ({persons}) =>
<>
      { persons.map(person => 
        <p key = {person.name}>{person.name} {person.number}</p>
      )}</>
export default Display