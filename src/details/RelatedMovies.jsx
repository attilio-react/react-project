import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

class RelatedMovies extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <div>
                    {
                        ctx.relatedMovies.map(movie => <div key={movie.id}>{movie.title}</div> )
                    }
                </div>
            )}
            </DetailsContext.Consumer>)
  }

}


export {RelatedMovies}


