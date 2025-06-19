 
import React from 'react'

export default function SalesForm() {
  return (
    <div>
      <h2>Create New Sale</h2>
      <form>
        <div>
          <label>Product:</label>
          <input type="text" />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" />
        </div>
        <button type="submit">Add Sale</button>
      </form>
    </div>
  )
}
