import React from 'react';

import {connect} from 'react-redux'

import {paths} from 'Common/Paths.jsx'

import {DetailsContext} from './DetailsContext.jsx'

import {LinkButton} from 'Common/LinkButton.jsx'

import {MovieData} from './MovieData.jsx'
import {RelatedMovies} from './RelatedMovies.jsx'

import {
    getMoviesRequest, getMovieDetailsAndRelatedRequest} from 'Redux/ActionCreators.jsx'

class MovieDetailsImpl extends React.PureComponent {
  componentWillMount() {
    const {selectItemCallback, match: {params: {id}}} = this.props
    selectItemCallback(id)
  }

  componentWillReceiveProps(nextProps) {
     const {selectItemCallback, match: {params: {id}}} = this.props,
          {match: {params: {id: newId}}} = nextProps

     if (id !== newId) {
         selectItemCallback(newId)
     }
  }

  render () {
   const {
            selectedMovie, sameGenreMovies, selectedMovieGenres,
            selectItemCallback, backToSearchButtonCallback
        } = this.props,
	self = this

   return (<DetailsContext.Provider
	 value={{
			 movie: selectedMovie,
			 relatedMovies: sameGenreMovies,
			 relatedGenres: selectedMovieGenres,
                         itemClickCb: selectItemCallback
	    }}>
                <>
                &nbsp;
                &nbsp;
                <LinkButton caption='Search' to={paths.SEARCH_PATH} />
                <MovieData />
                <RelatedMovies />
                </>
            </DetailsContext.Provider>)
  }

}


const mapStateToProps = (state, ownProps) => {
      return {
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
          selectItemCallback: (id) => {
              dispatch(getMovieDetailsAndRelatedRequest(id))
          },

          backToSearchButtonCallback: () => {
              dispatch(gotoScreen(consts.SEARCH_SCREEN))
          }
      }
}

const MovieDetails = connect(
      mapStateToProps,
      mapDispatchToProps
)(MovieDetailsImpl)

export {MovieDetails}

