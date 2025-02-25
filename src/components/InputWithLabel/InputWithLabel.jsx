import React, { Fragment, useEffect, useRef } from "react";
import Button from "../../Button";
import styleInput from "./inputWithLabel.module.css"
import PropTypes from "prop-types";

function InputWithLabel ({id, onTitleChange, value, completedAt, children }) {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
    }, []);
    return (   
        <Fragment >
            <label className={styleInput.label} htmlFor="todoTitle" >{children}</label>
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

InputWithLabel.propTypes = {
    id: PropTypes.string,
    onTitleChange: PropTypes.func,
    value: PropTypes.string,
    children: PropTypes.node
  };

export default InputWithLabel;