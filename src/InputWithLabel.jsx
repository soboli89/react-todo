import React, { Fragment, useEffect, useRef } from "react";
import Button from "./Button";
import styleInput from "./input.module.css"

function InputWithLabel ({id, onTitleChange, value, children }) {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
    }, []);
    return (   
        <Fragment >
            <label style={{color: "blue", fontSize:"30px", fontWeight:"bold" }} htmlFor="todoTitle" >{children}</label><br/>
            <input className={styleInput.input}
                id={id} 
                type="text" 
                value={value}
                onChange={onTitleChange}
                ref={inputRef}
            />
            <br/>
            <Button className={styleInput.inputButton} type="submit" label="Add"></Button>
        </Fragment>
    )
}

export default InputWithLabel;