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
import {
    gotoScreen,
    searchBy, sortBy, searchTerm,
    getMoviesRequest, getMovieDetailsAndRelatedRequest} from './redux/ActionCreators.jsx'

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

 render () {
   const {
            screen,
            items, total,
            searchTerm, searchBy, sortBy,
            selectedMovie, sameGenreMovies, selectedMovieGenres,
            searchTermChangeCallback,
            searchButtonCallback, titleSearchButtonCallback, genreSearchButtonCallback,
            sortByReleaseDateCallback, sortByRatingCallback,
            selectItemCallback, backToSearchButtonCallback} = this.props,
        self = this

   let content
   if (screen === consts.SEARCH_SCREEN) {
          content = <SearchContext.Provider
            value={{
                items: items,
                total: total,
                searchTerm: searchTerm,
                searchTermCb: searchTermChangeCallback,
                titleClickCb: () => titleSearchButtonCallback(self.props),
                genreClickCb: () => genreSearchButtonCallback(self.props),
                searchBySelection: searchBy,
                searchClickCb: () => searchButtonCallback(self.props),
                releaseDateClickCb: () => sortByReleaseDateCallback(self.props),
                ratingClickCb: () => sortByRatingCallback (self.props),
                sortBy: sortBy,
                itemClickCb: (id) => selectItemCallback(id)
            }}>
            <MovieSearch />
          </SearchContext.Provider>
   } else {
          content = <DetailsContext.Provider
            value={{
                searchClickCb: backToSearchButtonCallback,
                movie: selectedMovie,
                relatedMovies: sameGenreMovies,
                relatedGenres: selectedMovieGenres,
                itemClickCb: (id) => selectItemCallback(id)
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
                screen: state.guiReducer.screen,
                items: state.apiReducer.items,
                total: state.apiReducer.total,
                searchBy: state.guiReducer.searchBy,
                sortBy: state.guiReducer.sortBy,
                searchTerm: state.guiReducer.searchTerm,
                selectedMovie: state.apiReducer.selectedMovie,
                sameGenreMovies: state.apiReducer.sameGenreMovies,
                selectedMovieGenres: state.apiReducer.selectedMovieGenres
      }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      const doGetMovies = (props, dispatch, override) => {
          const {searchTerm, searchBy, sortBy} = Object.assign({}, props, override)
          dispatch(getMoviesRequest({
              search: searchTerm,
              searchBy: (searchBy === consts.SEARCH_BY_GENRE ? consts.VALUE_BY_GENRE : consts.VALUE_BY_TITLE),
              sortBy: (sortBy === consts.SORT_BY_RELEASE_DATE ? consts.VALUE_BY_RELEASE_DATE : consts.VALUE_BY_VOTE_AVERAGE),
              sortOrder: consts.VALUE_ASC
          }))
      }
      return {
          searchButtonCallback: (props) => {
              doGetMovies(props, dispatch)
          },

          searchTermChangeCallback: (evt) => {
              dispatch(searchTerm(evt.target.value))
          },

          titleSearchButtonCallback: (props) => {
              dispatch(searchBy(consts.SEARCH_BY_TITLE))
              doGetMovies(props, dispatch, {searchBy: consts.SEARCH_BY_TITLE})
          },

          genreSearchButtonCallback: (props) => {
              dispatch(searchBy(consts.SEARCH_BY_GENRE))
              doGetMovies(props, dispatch, {searchBy: consts.SEARCH_BY_GENRE})
          },

          sortByReleaseDateCallback: (props) => {
              dispatch(sortBy(consts.SORT_BY_RELEASE_DATE))
              doGetMovies(props, dispatch, {sortBy: consts.SORT_BY_RELEASE_DATE})
          },

          sortByRatingCallback: (props) => {
              dispatch(sortBy(consts.SORT_BY_RATING))
              doGetMovies(props, dispatch, {sortBy: consts.SORT_BY_RATING})
          },

          selectItemCallback: (id) => {
              dispatch(gotoScreen(consts.DETAIL_SCREEN))
              dispatch(getMovieDetailsAndRelatedRequest(id))
          },

          backToSearchButtonCallback: () => {
              dispatch(gotoScreen(consts.SEARCH_SCREEN))
          }


      }
}

const App = connect(
      mapStateToProps,
      mapDispatchToProps
)(AppImpl)

export {App}
