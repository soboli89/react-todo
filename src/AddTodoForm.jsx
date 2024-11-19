import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function AddTodoForm (){
    return(
            <form>
                <label htmlFor="todoTitle">Title</label><br/>
                <input id="todoTitle" type="text"></input><br/>
                <input type="submit"></input>
            </form>
    )
};

export default AddTodoForm;