 
import React from 'react'

export default function UserSettings() {
  return (
    <div>
      <h2>User Settings</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}
