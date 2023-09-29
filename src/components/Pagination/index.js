import React from 'react'
import './index.scss'
const Pagination = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <ul>
      <li>Previous</li>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <li>Next</li>
    </ul>
  )
}

export default Pagination
