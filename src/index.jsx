import React from 'react';
import {render} from 'react-dom';

import {Label} from './Label.jsx'
import {MovieSearch} from './MovieSearch.jsx'
import {SearchResult} from './SearchResult.jsx'

class App extends React.Component {
  render () {
   return <>
            <Label text="netflixroulette" />
            <MovieSearch />
            <SearchResult />
            <Label text="netflixroulette" />
          </>
  }
}

render(<App/>, document.getElementById('app'));
