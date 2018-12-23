import React from 'react';

import {SearchContext} from './SearchContext.jsx'

import {NoResult} from './NoResult.jsx'
import {ResultList} from './ResultList.jsx'

class SearchResult extends React.PureComponent {
  render () {
    return (<SearchContext.Consumer>
          {results => {
            const resultsFound = results && results.items && results.items.length > 0;
            return resultsFound ? <ResultList results={results.items}/> : <NoResult/>;
          }}
    </SearchContext.Consumer>)
  }
}


export {SearchResult}


