import React from 'react';

const Input = ({name, label, placeholderText}) => {
    return (
        <div className="input-info">
            <label>{name}</label>
            <input type="text" id={label} name={label} placeholder={placeholderText}></input>
        </div>
    )
}

export default Input;