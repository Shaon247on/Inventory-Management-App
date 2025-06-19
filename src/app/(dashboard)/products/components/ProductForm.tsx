 
import React from 'react'

export default function ProductForm() {
  return (
    <div>
      <h2>Product Form</h2>
      <form>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>
        <button type="submit">Save Product</button>
      </form>
    </div>
  )
}
