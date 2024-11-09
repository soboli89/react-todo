import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const list =[
    {
      id: 1,
      name : 'create an agreement with utility companies',
      deadline: 'wednesday'
    },
    {
      id: 2,
      name : 'change driver license',
      deadline: 'tuesday'
    },
    {
      id: 3,
      name : 'meet with friend regarding the work',
      deadline: 'thursday'
    },
    {
      id: 4,
      name : 'Set up an appointment to connest the internet',
      deadline: 'thursday'
    }
  ]
  return (
    <div>
   <h1>Todo List</h1>
      <ul>
      {list.map(function (item) {
            return <li>{item.name}</li>
          }
      )}
      </ul>
   </div>
  )
}

export default App
