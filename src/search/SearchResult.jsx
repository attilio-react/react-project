import React from 'react';

import {SearchContext} from './SearchContext.jsx'

import {NoResult} from './NoResult.jsx'
import {ResultContainer} from './ResultContainer.jsx'

class SearchResult extends React.PureComponent {
  render () {
    return (<SearchContext.Consumer>
          {results => {
            const resultsFound = results && results.items && results.items.length > 0;
            return resultsFound ? <ResultContainer /> : <NoResult/>;
          }}
    </SearchContext.Consumer>)
  }
}


export {SearchResult}


