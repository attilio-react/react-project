import React from 'react';
import {render} from 'react-dom';

import {consts} from './Consts.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Label} from './common/Label.jsx'
import {MovieSearch} from './MovieSearch.jsx'
import {SearchResult} from './SearchResult.jsx'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: ''
      }
  }

  searchTermChangeCallback(evt) {
      this.setState({searchTerm: evt.target.value});
  }

  titleSearchButtonCallback() {
      this.setState({searchBy: consts.SEARCH_BY_TITLE})
  }

  genreSearchButtonCallback() {
      this.setState({searchBy: consts.SEARCH_BY_GENRE})
  }

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
	 }],
        self = this,
        {searchBy, searchTerm} = self.state

   return <SearchContext.Provider
            value={{
                items: items,
                searchTerm: searchTerm,
                searchTermCb: self.searchTermChangeCallback.bind(self),
                titleClickCb: self.titleSearchButtonCallback.bind(self),
                genreClickCb: self.genreSearchButtonCallback.bind(self),
                searchBySelection: searchBy
            }}>
            <Label text="netflixroulette" />
            <MovieSearch />
            <SearchResult />
            <Label text="netflixroulette" />
          </SearchContext.Provider>
  }
}

render(<App/>, document.getElementById('app'));
