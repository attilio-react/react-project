import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

import {Label} from 'Common/Label.jsx'

class RelatedMovies extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <div>
                    <Label text={`Films by genre ${ctx.relatedGenres.join(', ')}`} />
                    {
                        ctx.relatedMovies.map(movie => <div key={movie.id}>{movie.title}</div> )
                    }
                </div>
            )}
            </DetailsContext.Consumer>)
  }

}


export {RelatedMovies}


