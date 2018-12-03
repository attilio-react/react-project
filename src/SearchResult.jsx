import React from 'react';

import {NoResult} from './NoResult.jsx'
import {ResultList} from './ResultList.jsx'

class SearchResult extends React.PureComponent {
  render () {
    const {results} = this.props,
          resultsFound = results && results.length > 0;
    return resultsFound ? <ResultList results={results}/> : <NoResult/>;
  }
}


export {SearchResult}


