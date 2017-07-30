import React from 'react';

const Dropdown = () => {
    return (
        <select onChange={() => {
            console.log('select has changed');
        }}></select>
    )
};

export {
    Dropdown as default
};