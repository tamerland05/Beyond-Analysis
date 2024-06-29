import React from 'react';


const Select = ({options, value, onChange}) => {
    return (
        <select style={{padding: 8, fontSize: 16}}
                value={value}
                onChange={event => onChange(event.target.value)}
        >

            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}

        </select>
    );
};

export default Select;