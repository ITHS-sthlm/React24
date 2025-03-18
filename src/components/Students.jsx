import React from 'react'
import PropTypes from 'prop-types'

function Students(props) {
  return (
    <div>
        <h1>Students</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Is studying?: {props.isStudent ? "Yes" : "No"}</p>
     </div>
  )

}
Students.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent:PropTypes.bool.isRequired
}

export default Students
