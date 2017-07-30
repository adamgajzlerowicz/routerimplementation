import React from 'react'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {routerReducer, syncHistoryWithStore} from 'react-router-redux';
import {Link, Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'


const reducer = () => {
    return {};
};

const customHistory = createBrowserHistory();




const store = createStore(
    combineReducers({
        ...reducer,
        routing: routerReducer
    }),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const history = syncHistoryWithStore(customHistory, store);

const Apps = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <hr/>

                <Route exact path="/"yarn start
                       component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    </Provider>

)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = ({...props}) => {
    console.log('props of about are ', props);

    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

//
// const Topics = ({match}) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/dupeczki`}>
//                     Ich bin eine link
//                 </Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

export default Apps