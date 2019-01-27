import React from 'react';

import {HashRouter as Router, Route, Link} from "react-router-dom";

import {ErrorBoundary} from './ErrorBoundary.jsx'

import {Label} from 'Common/Label.jsx'
import {MovieSearch} from './search/MovieSearch.jsx'
import {MovieDetails} from './details/MovieDetails.jsx'

const Index = () => <h2>Home</h2>;

class App extends React.Component {
    render () {
        return   <Router>
            <div>
            <ErrorBoundary>
                <Label text="netflixroulette" />

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search/">Search</Link>
                        </li>
                        <li>
                            <Link to="/details/">Details</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/search/" component={MovieSearch} />
                <Route path="/details/:id" component={MovieDetails} />

                <Label text="netflixroulette" />
            </ErrorBoundary>	
            </div>
        </Router>
    }
}


export {App}
