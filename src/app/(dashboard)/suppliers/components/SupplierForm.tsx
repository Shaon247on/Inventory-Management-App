 
import React from 'react'

export default function SupplierForm() {
  return (
    <div>
      <h2>Add New Supplier</h2>
      <form>
        <div>
          <label>Supplier Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Contact Person:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" />
        </div>
        <button type="submit">Add Supplier</button>
      </form>
    </div>
  )
}
