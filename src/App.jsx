import { useState } from 'react'
import './App.css'
import TableList from './components/TableList';
import TableDetails from './components/TableDetails';

function App() {

  const [id, setId] = useState(1)

  const tables = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  
  return (
    <>
      <TableList tables={tables} setId={setId}/>
      <TableDetails id={id} />
    </>
  )
}

export default App
