import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

import {Button} from 'Common/Button.jsx'

import {MovieData} from './MovieData.jsx'
import {RelatedMovies} from './RelatedMovies.jsx'

class MovieDetails extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <>
                &nbsp;
                &nbsp;
                <Button caption='Search' onClick={ctx.searchClickCb} />
                <MovieData />
                <RelatedMovies />
                </>
            )}
            </DetailsContext.Consumer>)
  }

}


export {MovieDetails}


