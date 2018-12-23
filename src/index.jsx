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
          items: [],
          total: 0
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
      const self = this,
          {searchBy, searchTerm} = this.state

      getMovies({
          search: searchTerm,
          searchBy: (searchBy === consts.SEARCH_BY_GENRE ? 'genres' : 'title')
      },
      response => {
          self.setState({items: response.data, total: response.total})
      })
  }

  render () {
   const {items, total, searchBy, searchTerm} = this.state,
        self = this

   return <SearchContext.Provider
            value={{
                items: items,
                total: total,
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
