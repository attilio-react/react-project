import React from 'react';

import {NoResult} from './NoResult.jsx'

class SearchResult extends React.PureComponent {
  render () {
    const {results} = this.props,
          resultsFound = results && results.length > 0;
    return resultsFound ? <div>Search result</div> : <NoResult/>;
  }
}


export {SearchResult}


