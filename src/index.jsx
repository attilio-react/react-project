import React from 'react';
import {render} from 'react-dom';

import {SearchContext} from './SearchContext.jsx'

import {Label} from './common/Label.jsx'
import {MovieSearch} from './MovieSearch.jsx'
import {SearchResult} from './SearchResult.jsx'

class App extends React.Component {
  render () {
   const items = [
         {
             imgSrc: '/hello.jpg',
             releaseDate: '2011-10-13',
             genre: 'drama',
             title: 'Hello'
	 },
	 {
	     imgSrc: '/hello2.jpg',
             releaseDate: '2018-10-13',
             genre: 'action',
             title: 'Hello2'
	 }
   ]
   return <SearchContext.Provider value={{items: items}}>
            <Label text="netflixroulette" />
            <MovieSearch />
            <SearchResult />
            <Label text="netflixroulette" />
          </SearchContext.Provider>
  }
}

render(<App/>, document.getElementById('app'));
