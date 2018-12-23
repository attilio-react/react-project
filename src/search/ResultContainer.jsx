import React from 'react';

import {ResultHeader} from './ResultHeader.jsx'
import {ResultList} from './ResultList.jsx'

class ResultContainer extends React.PureComponent {
  render () {
    return <div>
                <ResultHeader />
                <ResultList />
           </div>
  }
}


export {ResultContainer}


