import React from 'react';

const Space = ({name}) => {
    return (
        <div>
            <h2>Space</h2>
            <p>the name from props is {name}</p>
        </div>
    );
};

export {
    Space as default
};
