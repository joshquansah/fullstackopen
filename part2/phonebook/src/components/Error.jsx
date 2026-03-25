const Error = ({ warning }) => {
  if (warning === null) {
    return null
  }

  return (
    <div className="error">
      {warning}
    </div>
  )
}

export default Error