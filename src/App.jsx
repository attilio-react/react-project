import React from 'react';

import {paths} from 'Common/Paths.jsx'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

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
                
                <Switch>
                    <Route path={paths.ROOT_PATH} exact component={MovieSearch} />
                    <Route path={paths.SEARCH_PATH_PARAMS} component={MovieSearch} />
                    <Route path={paths.SEARCH_PATH} component={MovieSearch} />
                    <Route path={paths.DETAILS_PATH_PARAMS} component={MovieDetails} />
                    <Route path={paths.UNKNOWN_PATH} component={NotFound} />
                </Switch>

                <Label text="netflixroulette" />
            </ErrorBoundary>	
            </div>
        </Router>
    }
}


export {App}
