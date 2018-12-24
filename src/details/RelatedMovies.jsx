import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

import {ResultItem} from 'Common/ResultItem.jsx'

import {Label} from 'Common/Label.jsx'

class RelatedMovies extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <div>
                    <Label text={`Films by genre ${ctx.relatedGenres.join(', ')}`} />
                    {
                        ctx.relatedMovies.map((movie, i) => <ResultItem item={movie} clickCallback={ctx.itemClickCb} key={i} />)
                    }
                </div>
            )}
            </DetailsContext.Consumer>)
  }

}


export {RelatedMovies}


