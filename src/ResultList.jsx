import React from 'react';

import {SearchContext} from './SearchContext.jsx'

import {ResultItem} from './ResultItem.jsx'

class ResultList extends React.PureComponent {
  render () {
    return (
        <SearchContext.Consumer>
           {ctx => (
           <div>
                {ctx.items.map((object, i) => <ResultItem item={object} key={i} />)}
           </div>
           )}
        </SearchContext.Consumer>)
  }
}


export {ResultList}


