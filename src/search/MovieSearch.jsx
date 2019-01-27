import React from 'react';
import {connect} from 'react-redux'

import {consts} from 'Common/Consts.jsx'
import {paths} from 'Common/Paths.jsx'

import {SearchContext} from './SearchContext.jsx'

import {LinkButton} from 'Common/LinkButton.jsx';
import {Label} from 'Common/Label.jsx';
import {InputText} from 'Common/InputText.jsx';
import {SearchByContainer} from './SearchByContainer.jsx';
import {SearchResult} from './SearchResult.jsx';

import {
    searchBy, sortBy, searchTerm,
    getMoviesRequest} from 'Redux/ActionCreators.jsx'

class MovieSearchImpl extends React.PureComponent {

  doesSearchTermExist(term) {
    return (term !== null && term !== undefined && term.trim() !== '')
  }

  startSearch(term) {
    const {searchButtonCallback, searchTermChangeCallback} = this.props,
          finalProps = Object.assign({}, this.props, {searchTerm: term}),
          evt = {target: {value: term}}
    searchButtonCallback(finalProps)
    searchTermChangeCallback(evt)
  }

  componentWillMount() {
    const {searchButtonCallback, match: {params: {term}}} = this.props
    if (this.doesSearchTermExist(term)) {
    	this.startSearch(term)
    }
  }

  componentWillReceiveProps(nextProps) {
     const {searchButtonCallback, match: {params: {term}}} = this.props,
          {match: {params: {term: newTerm}}} = nextProps
     if (term !== newTerm && this.doesSearchTermExist(newTerm)) {
    	 this.startSearch(newTerm)
     }
  }

  render () {
    const {
            items, total,
            searchTerm, searchBy, sortBy,
            searchTermChangeCallback,
            searchButtonCallback, titleSearchButtonCallback, genreSearchButtonCallback,
            sortByReleaseDateCallback, sortByRatingCallback} = this.props,
	self = this


    return (<SearchContext.Provider value={{
            items: items,
            total: total,
            searchTerm: searchTerm,
            titleClickCb: () => titleSearchButtonCallback(self.props),
            genreClickCb: () => genreSearchButtonCallback(self.props),
            searchBySelection: searchBy,
            releaseDateClickCb: () => sortByReleaseDateCallback(self.props),
            ratingClickCb: () => sortByRatingCallback (self.props),
            sortBy: sortBy,
            itemClickCb: (id) => selectItemCallback(id)
	 }}>       
               <>
		  <p><Label text='FIND YOUR MOVIE' /></p>
		  <p><InputText onChange={searchTermChangeCallback} inputValue={searchTerm} /></p>
		  <p>
		     <SearchByContainer />
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     <LinkButton caption='SEARCH' to={paths.SEARCH_PATH + searchTerm} />
		  </p>
                  <SearchResult />
                </>
            </SearchContext.Provider>)
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
              console.log(evt)
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
          }
      }
}

const MovieSearch = connect(
      mapStateToProps,
      mapDispatchToProps
)(MovieSearchImpl)

export {MovieSearch}



