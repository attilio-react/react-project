import React from 'react';

import {DetailsContext} from './DetailsContext.jsx'

import {Button} from 'Common/Button.jsx'

class MovieDetails extends React.PureComponent {
  render () {
    return (<DetailsContext.Consumer>
            {ctx => (
                <>
                &nbsp;
                &nbsp;
                <Button caption='Search' onClick={ctx.searchClickCb} />
                <div></div>
                </>
            )}
            </DetailsContext.Consumer>)
  }

}


export {MovieDetails}


