import React from 'react';

import {paths} from 'Common/Paths.jsx'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {ErrorBoundary} from './ErrorBoundary.jsx'

import {Label} from 'Common/Label.jsx'
import {MovieSearch} from './search/MovieSearch.jsx'
import {MovieDetails} from './details/MovieDetails.jsx'
import {NotFound} from './NotFound.jsx'

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
                            <Link to={paths.SEARCH_PATH}>Search</Link>
                        </li>
                        <li>
                            <Link to={paths.DETAILS_PATH}>Details</Link>
                        </li>
                    </ul>
                </nav>

                <Route path={paths.ROOT_PATH} exact component={MovieSearch} />
                <Route path={paths.SEARCH_PATH} component={MovieSearch} />
                <Route path={paths.DETAILS_PATH} component={MovieDetails} />
                <Route path={paths.UNKNOWN_PATH} component={NotFound} />

                <Label text="netflixroulette" />
            </ErrorBoundary>	
            </div>
        </Router>
    }
}


export {App}
