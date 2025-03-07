// import { useState } from 'react'
import './App.css'
import TableList from './components/TableList';

function App() {

  const tables = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  
  return (
    <>
      <TableList tables={tables}/>
    </>
  )
}

export default App
