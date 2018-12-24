import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

class MovieData extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <div>
                    <img src={ctx.movie.poster_path} />
                    <p><span>{ctx.movie.title}</span></p>
                    <p><span>{ctx.movie.vote_average}</span></p>
                    <p><span>{ctx.movie.release_date}</span></p>
                    <p><span>{ctx.movie.runtime}</span></p>
                    <p><span>{ctx.movie.overview}</span></p>
                </div>
            )}
            </DetailsContext.Consumer>)
  }

}


export {MovieData}


