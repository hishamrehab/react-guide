import React from 'react'

const Input = ({ label, id, name, type, ...props }) => {
  return (
    <p className="control">
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            name={name}
            type={type}
            {...props}
            required
         />
    </p>
  )
}

export default Input