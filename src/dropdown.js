import React from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';
import type {RouteType} from './types';

const Dropdown = ({history, location: {pathname}}) => {

    const choices = routes.map((item):RouteType => {
        return item.name;
    });
    choices.unshift('/');

    const options = choices.map((choice):RouteType => {
        return <option value={choice} key={choice}>{choice}</option>;
    });

    const linkOptions = choices.map((choice):RouteType => {
        return <li key={choice}><Link to={choice}>{choice}</Link></li>;
    });

    return (
        <div>
            <ul>
                {linkOptions}
            </ul>
            <select
                onChange={(e) => {
                    history.push(e.target.value);
                }}
                defaultValue={pathname}
            >
                {options}
            </select>
        </div>

    )
};

export {
    Dropdown as default
};