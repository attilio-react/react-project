import React from 'react';

import {connect} from 'react-redux'

import {DetailsContext} from './DetailsContext.jsx'

import {Button} from 'Common/Button.jsx'

import {MovieData} from './MovieData.jsx'
import {RelatedMovies} from './RelatedMovies.jsx'

import {
    getMoviesRequest, getMovieDetailsAndRelatedRequest} from 'Redux/ActionCreators.jsx'

class MovieDetailsImpl extends React.PureComponent {
  componentWillMount() {
    console.log('componentWillMount')
    const {selectItemCallback, location: {pathname}} = this.props,
          id = pathname.split(/\//).pop()

    console.log('id = ' + id)
    selectItemCallback(id)
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
                <Button caption='Search' onClick={backToSearchButtonCallback} />
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

