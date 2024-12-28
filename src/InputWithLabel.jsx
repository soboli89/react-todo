import React, { Fragment } from "react";

function InputWithLabel ({id, setValues }) {

    return (   
        <Fragment>
            <label htmlFor="todoTitle" >Title</label><br/>
            <input 
                id={id} 
                type="text" 
                onChange={setValues}
            />
            <br/>
            <input type="submit" ></input>
            </Fragment>
    )
}

export default InputWithLabel;