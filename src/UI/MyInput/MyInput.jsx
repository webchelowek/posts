import React from 'react';
import "./MyInput.css";

function MyInput(props){
    return(
        <input {...props} className="MyInput"/>
    )
}

export default MyInput;