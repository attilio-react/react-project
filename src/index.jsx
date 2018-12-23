import React from 'react';
import {render} from 'react-dom';

import {consts} from 'Common/Consts.jsx'
import {getMovies} from './ApiOperations.jsx'

import {SearchContext} from './search/SearchContext.jsx'
import {DetailsContext} from './details/DetailsContext.jsx'

import {Label} from 'Common/Label.jsx'
import {MovieSearch} from './search/MovieSearch.jsx'
import {MovieDetails} from './details/MovieDetails.jsx'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          screen: consts.SEARCH_SCREEN,

          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: '',
          items: [],
          total: 0,
          sortBy: consts.SORT_BY_RELEASE_DATE,

          selectedId: null
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

  selectItemCallback(id) {
      this.setState({screen: consts.DETAIL_SCREEN, selectedId: id})
  }

  backToSearchButtonCallback() {
      this.setState({screen: consts.SEARCH_SCREEN, selectedId: null})
  }

  render () {
   const {screen,
          items, total, searchBy, searchTerm, sortBy} = this.state,
        self = this

   let content
   if (screen === consts.SEARCH_SCREEN) {
          content = <SearchContext.Provider
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
   } else {
          content = <DetailsContext.Provider
            value={{
                searchClickCb: self.backToSearchButtonCallback.bind(self)
            }}>
            <MovieDetails />
           </DetailsContext.Provider>
   }
 

   return <>
           <Label text="netflixroulette" />
           {content} 
           <Label text="netflixroulette" />
          </>
  }
}

render(<App/>, document.getElementById('app'));
