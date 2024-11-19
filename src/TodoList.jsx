import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function TodoList() {
    return (
        <ul>
            {list.map((item)=> {
              return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    )   
};


export default TodoList;