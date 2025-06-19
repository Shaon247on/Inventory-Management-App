 
import React from 'react'
import InventoryReport from './components/InventoryReport'
import SalesReport from './components/SalesReport'
import ProfitLossReport from './components/ProfitLossReport'

export default function Page() {
  return (
    <div>
      <h1>Reports</h1>
      <p>View and manage reports here.</p>
      <InventoryReport />
      <ProfitLossReport />
      <SalesReport />
    </div>
  )
}
