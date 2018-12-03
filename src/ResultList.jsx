import React from 'react';

import {ResultItem} from './ResultItem.jsx'

class ResultList extends React.PureComponent {
  render () {
    const {results} = this.props
    return <div>
                {results.map((object, i) => <ResultItem item={object} key={i} />)}
           </div>
  }
}


export {ResultList}


