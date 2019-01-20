import React from 'react';

import {connect} from 'react-redux'

import {consts} from 'Common/Consts.jsx'
import {getMovies, getMoviesByGenres, getMovie} from './ApiOperations.jsx'

import {ErrorBoundary} from './ErrorBoundary.jsx'

import {SearchContext} from './search/SearchContext.jsx'
import {DetailsContext} from './details/DetailsContext.jsx'

import {Label} from 'Common/Label.jsx'
import {MovieSearch} from './search/MovieSearch.jsx'
import {MovieDetails} from './details/MovieDetails.jsx'

import {SEARCH_BY} from './redux/ActionTypes.jsx'
import {searchBy, sortBy, searchTerm,
    getMoviesRequest} from './redux/ActionCreators.jsx'

class AppImpl extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          screen: consts.SEARCH_SCREEN,

          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: '',
          items: [],
          total: 0,
          sortBy: consts.SORT_BY_RELEASE_DATE,

          selectedMovie: null,
          selectedMovieGenres: [],
          sameGenreMovies: []
      }
  }

  searchMovies(cb) {
      const self = this,
          {searchBy, searchTerm, sortBy} = this.state

      getMovies({
          search: searchTerm,
          searchBy: (searchBy === consts.SEARCH_BY_GENRE ? consts.VALUE_BY_GENRE : consts.VALUE_BY_TITLE),
          sortBy: (sortBy === consts.SORT_BY_RELEASE_DATE ? consts.VALUE_BY_RELEASE_DATE : consts.VALUE_BY_VOTE_AVERAGE),
          sortOrder: consts.VALUE_ASC
      },
      response => {
          self.setState({items: response.data, total: response.total}, cb)
      })
  }

  fetchMovieDetails(id, cb) {
      const self = this

      getMovie(id,
      response => {
          getMoviesByGenres(response.genres, id,
              relatedResponse => {
                  self.setState({
                      selectedMovie: response,
                      sameGenreMovies: relatedResponse,
                      selectedMovieGenres: response.genres
                  }, cb)
              })
      })
  }

 selectItemCallback(id) {
      const self = this
      self.fetchMovieDetails(id, () =>
          {self.setState({screen: consts.DETAIL_SCREEN})})
  }

  backToSearchButtonCallback() {
      this.setState({screen: consts.SEARCH_SCREEN})
  }

  render () {
   const {screen,
          selectedMovie, sameGenreMovies, selectedMovieGenres} = this.state,
        {items, total,
            searchTerm, searchBy, sortBy,
            searchTermChangeCallback,
            searchButtonCallback, titleSearchButtonCallback, genreSearchButtonCallback,
            sortByReleaseDateCallback, sortByRatingCallback} = this.props,
        self = this

   let content
   if (screen === consts.SEARCH_SCREEN) {
          content = <SearchContext.Provider
            value={{
                items: items,
                total: total,
                searchTerm: searchTerm,
                searchTermCb: searchTermChangeCallback,
                titleClickCb: titleSearchButtonCallback,
                genreClickCb: genreSearchButtonCallback,
                searchBySelection: searchBy,
                searchClickCb: () => searchButtonCallback(searchTerm, searchBy, sortBy),
                releaseDateClickCb: sortByReleaseDateCallback,
                ratingClickCb: sortByRatingCallback,
                sortBy: sortBy,
                itemClickCb: self.selectItemCallback.bind(self)
            }}>
            <MovieSearch />
          </SearchContext.Provider>
   } else {
          content = <DetailsContext.Provider
            value={{
                searchClickCb: self.backToSearchButtonCallback.bind(self),
                movie: selectedMovie,
                relatedMovies: sameGenreMovies,
                relatedGenres: selectedMovieGenres,
                itemClickCb: self.selectItemCallback.bind(self)
            }}>
            <MovieDetails />
           </DetailsContext.Provider>
   }
 

   return <ErrorBoundary>
           <Label text="netflixroulette" />
           {content} 
           <Label text="netflixroulette" />
          </ErrorBoundary>
  }
}


const mapStateToProps = (state, ownProps) => {
      return {
                items: state.apiReducer.items,
                total: state.apiReducer.total,
                searchBy: state.guiReducer.searchBy,
                sortBy: state.guiReducer.sortBy,
                searchTerm: state.guiReducer.searchTerm
      }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return {
          searchButtonCallback: (searchTerm, searchBy, sortBy) => {
              dispatch(getMoviesRequest({
                  search: searchTerm,
                  searchBy: (searchBy === consts.SEARCH_BY_GENRE ? consts.VALUE_BY_GENRE : consts.VALUE_BY_TITLE),
                  sortBy: (sortBy === consts.SORT_BY_RELEASE_DATE ? consts.VALUE_BY_RELEASE_DATE : consts.VALUE_BY_VOTE_AVERAGE),
                  sortOrder: consts.VALUE_ASC
              }))
          },

          searchTermChangeCallback: (evt) => {
              dispatch(searchTerm(evt.target.value))
          },

          titleSearchButtonCallback: () => {
              dispatch(searchBy(consts.SEARCH_BY_TITLE))
          },

          genreSearchButtonCallback: () => {
              dispatch(searchBy(consts.SEARCH_BY_GENRE))
          },

          sortByReleaseDateCallback: () => {
              dispatch(sortBy(consts.SORT_BY_RELEASE_DATE))
          },

          sortByRatingCallback: () => {
              dispatch(sortBy(consts.SORT_BY_RATING))
          },

      }
}

const App = connect(
      mapStateToProps,
      mapDispatchToProps
)(AppImpl)

export {App}
