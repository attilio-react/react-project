import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

import {Button} from 'Common/Button.jsx'

import {MovieData} from './MovieData.jsx'
import {RelatedMovies} from './RelatedMovies.jsx'

class MovieDetails extends React.PureComponent {
  componentWillMount() {
    console.log('componentWillMount')
    const {fetchItemDetails, location: {pathname}} = this.props,
          id = pathname.split(/\//).pop()

    console.log('id = ' + id)
    fetchItemDetails(id)
  }


  componentWillReceiveProps(prevProps) {
    console.log('componentWillReceiveProps')
    const {fetchItemDetails, location: {pathname}} = this.props,
          {location: {pathname: prevPathname}} = prevProps,
          id = pathname.split(/\//).pop(),
          prevId = prevPathname.split(/\//).pop()

    console.log('id = ' + id)
    console.log('prevPathname = ' + prevPathname)
    console.log('prevId = ' + prevId)
    
    if (id === prevId) {
        console.log('MovieDetails.componentDidUpdate, same id, not doing anything')
    } else {
        console.log('MovieDetails.componentDidUpdate, different id, fetching')
        fetchItemDetails(id)
    }
  }


  render () {
    return (<DetailsContext.Consumer>
            {ctx => <>
                &nbsp;
                &nbsp;
                <Button caption='Search' onClick={ctx.searchClickCb} />
                <MovieData />
                <RelatedMovies />
                </>
            }
            </DetailsContext.Consumer>)
  }

}


export {MovieDetails}


