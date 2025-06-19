 
import React from 'react'

export default function StoreSettings() {
  return (
    <div>
      <h2>Store Settings</h2>
      <form>
        <div>
          <label>Store Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" />
        </div>
        <div>
          <label>Contact Email:</label>
          <input type="email" />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  )
}
