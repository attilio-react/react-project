import React from 'react';
import {render} from 'react-dom';

import {consts} from 'Common/Consts.jsx'
import {getMovies} from './ApiOperations.jsx'

import {SearchContext} from './search//SearchContext.jsx'

import {Label} from 'Common/Label.jsx'
import {MovieSearch} from './search/MovieSearch.jsx'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: '',
          items: [],
          total: 0,
          sortBy: consts.SORT_BY_RELEASE_DATE
      }
  }

  searchMovies() {
       const self = this,
          {searchBy, searchTerm, sortBy} = this.state

      getMovies({
          search: searchTerm,
          searchBy: (searchBy === consts.SEARCH_BY_GENRE ? 'genres' : 'title'),
          sortBy: (sortBy === consts.SORT_BY_RELEASE_DATE ? 'release_date' : 'vote_average'),
          sortOrder: 'asc'
      },
      response => {
          self.setState({items: response.data, total: response.total})
      })
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
      this.searchMovies()
  }

  sortByReleaseDateCallback() {
      this.setState({sortBy: consts.SORT_BY_RELEASE_DATE}, this.searchMovies.bind(this))
  }
    
  sortByRatingCallback() {
      this.setState({sortBy: consts.SORT_BY_RATING}, this.searchMovies.bind(this))
  }

  selectItemCallback(id, id2) {
      console.log('selected item: ' + id)
  }

  render () {
   const {items, total, searchBy, searchTerm, sortBy} = this.state,
        self = this

   return <>
          <Label text="netflixroulette" />
          <SearchContext.Provider
            value={{
                items: items,
                total: total,
                searchTerm: searchTerm,
                searchTermCb: self.searchTermChangeCallback.bind(self),
                titleClickCb: self.titleSearchButtonCallback.bind(self),
                genreClickCb: self.genreSearchButtonCallback.bind(self),
                searchBySelection: searchBy,
                searchClickCb: self.searchButtonCallback.bind(self),
                releaseDateClickCb: self.sortByReleaseDateCallback.bind(self),
                ratingClickCb: self.sortByRatingCallback.bind(self),
                sortBy: sortBy,
                itemClickCb: self.selectItemCallback.bind(self)
            }}>
            <MovieSearch />
          </SearchContext.Provider>
          <Label text="netflixroulette" />
          </>
  }
}

render(<App/>, document.getElementById('app'));
