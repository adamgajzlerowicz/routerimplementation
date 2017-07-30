import React from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';

const Dropdown = ({history, location: {pathname}}) => {

    const choices = routes.map(item=>{
        return item.key;
    });

    choices.unshift('/');

    const options = choices.map(choice => {
        return <option value={choice} key={choice}>{choice}</option>;
    });

    return (
        <div>
            <ul>
                <li><Link to="/">/</Link></li>
                <li><Link to="/about">About</Link></li>
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