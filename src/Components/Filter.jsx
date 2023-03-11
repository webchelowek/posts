import "../Styles/Filter.css";
import React from 'react';

const Filter = ({options, defaultValue, value, setFilter}) => {
    return (
        <select className="postList__filter" value={value} onChange={setFilter}>
            <option disabled value="">{defaultValue}</option>
            {options.map((option) =>{
                return(
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            })}
        </select>
    );
};

export default Filter;