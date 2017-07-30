import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';


const About = ({...props}) => {
    console.log(props);
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

const mapState = (state) =>{
    return {
        state
    }
};

const ConnectedAbout = withRouter(connect(mapState)(About));

export {
    ConnectedAbout as default
};
