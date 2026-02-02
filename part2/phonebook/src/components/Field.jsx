const Field = ({name, value, onChange}) => <div>
          {name}: <input value = {value} onChange = {onChange} />
        </div>
export default Field