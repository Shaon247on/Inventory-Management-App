 
import React from 'react'

export default function PurchaseForm() {
  return (
    <div>
      <h2>Purchase Form</h2>
      <form>
        <div>
          <label htmlFor="product">Product:</label>
          <input type="text" id="product" name="product" />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" />
        </div>
        <div>
          <label htmlFor="buyer">Buyer:</label>
          <input type="text" id="buyer" name="buyer" />
        </div>
        <button type="submit">Submit Purchase</button>
      </form>
    </div>
  )
}
