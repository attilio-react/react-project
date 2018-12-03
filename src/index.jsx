import React from 'react';
import {render} from 'react-dom';

import {MovieSearch} from './MovieSearch.jsx'
import {SearchResult} from './SearchResult.jsx'

class App extends React.Component {
  render () {
   return <>
            <MovieSearch />
            <SearchResult />
          </>
  }
}

render(<App/>, document.getElementById('app'));
