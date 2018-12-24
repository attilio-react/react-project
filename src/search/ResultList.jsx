import React from 'react';

import {SearchContext} from './SearchContext.jsx'

import {ResultItem} from 'Common/ResultItem.jsx'

class ResultList extends React.PureComponent {
  render () {
    return (
        <SearchContext.Consumer>
           {ctx => (
           <div>
                {ctx.items.map((object, i) => <ResultItem item={object} clickCallback={ctx.itemClickCb} key={i} />)}
           </div>
           )}
        </SearchContext.Consumer>)
  }
}


export {ResultList}


