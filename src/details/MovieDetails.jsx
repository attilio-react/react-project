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
            selectItemCallback
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
     return {
          selectItemCallback: (id) => {
              dispatch(getMovieDetailsAndRelatedRequest(id))
          }
      }
}

const MovieDetails = connect(
      mapStateToProps,
      mapDispatchToProps
)(MovieDetailsImpl)

export {MovieDetails}

