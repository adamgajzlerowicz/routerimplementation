import React from 'react';

const Space = ({match:{params:{id}}}) => {
    return (
        <div>
            <h2>Singular Space</h2>
            <p>The id is {id}</p>
        </div>
    );
};

export {
    Space as default
};
