import React from 'react'

const Paragraph = ({onClick}) => {
  return (
    <div>
      <p>Paragraph</p>
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default Paragraph
