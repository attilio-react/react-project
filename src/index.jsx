import React from 'react';
import {render} from 'react-dom';

import {consts} from './Consts.jsx'
import {getMovies} from './ApiOperations.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Label} from './common/Label.jsx'
import {MovieSearch} from './MovieSearch.jsx'
import {SearchResult} from './SearchResult.jsx'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: '',
          items: []
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

  searchButtonCallback() {
      const self = this
      getMovies(response => {
          self.setState({items: response.data})
      })
  }

  render () {
   const {items, searchBy, searchTerm} = this.state,
        self = this

   return <SearchContext.Provider
            value={{
                items: items,
                searchTerm: searchTerm,
                searchTermCb: self.searchTermChangeCallback.bind(self),
                titleClickCb: self.titleSearchButtonCallback.bind(self),
                genreClickCb: self.genreSearchButtonCallback.bind(self),
                searchBySelection: searchBy,
                searchClickCb: self.searchButtonCallback.bind(self)
            }}>
            <Label text="netflixroulette" />
            <MovieSearch />
            <SearchResult />
            <Label text="netflixroulette" />
          </SearchContext.Provider>
  }
}

render(<App/>, document.getElementById('app'));
