import React, { Fragment, useEffect, useRef } from "react";
import Button from "./Button";

function InputWithLabel ({id, onTitleChange, value, children }) {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
    }, []);
    return (   
        <Fragment>
            <label htmlFor="todoTitle" >{children}</label><br/>
            <input 
                id={id} 
                type="text" 
                value={value}
                onChange={onTitleChange}
                ref={inputRef}
            />
            <br/>
            <Button type="submit" label="Add"></Button>
        </Fragment>
    )
}

export default InputWithLabel;