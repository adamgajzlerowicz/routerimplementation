import React from 'react';
import PropTypes from 'prop-types'

const Dropdown = ({history}, context) => {
    return (
        <select onChange={(e) => {
            history.push(e.target.value);
        }}>
            <option value="/">/</option>
            <option value="about">foo/</option>
        </select>
    )
};

Dropdown.contextTypes = {
    router: PropTypes.any
}

export {
    Dropdown as default
};