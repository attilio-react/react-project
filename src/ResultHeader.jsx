import React from 'react';

import {SearchContext} from './SearchContext.jsx'

import {Label} from './common/Label.jsx'

class ResultHeader extends React.PureComponent {
  render () {
    return <SearchContext.Consumer> 
          {ctx => (
              <div>
               <Label text={`${ctx.total} movies found`} />  
              </div>
          )}
          </SearchContext.Consumer>
  }
}


export {ResultHeader}


