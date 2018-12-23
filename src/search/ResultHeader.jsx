import React from 'react';

import {consts} from 'Common/Consts.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Button} from 'Common/Button.jsx'
import {Label} from 'Common/Label.jsx'

class ResultHeader extends React.PureComponent {
  render () {
    return <SearchContext.Consumer> 
          {ctx => {
              const {total, releaseDateClickCb, ratingClickCb, sortBy} = ctx,
                  releaseDateSelected = (sortBy === consts.SORT_BY_RELEASE_DATE),
                  ratingSelected = !releaseDateSelected
              return <div>
               <Label text={`${total} movies found`} />  
               &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;
               <Label text='Sort by: '/ >
               &nbsp;
               <Button onClick={releaseDateClickCb} caption='release date' selected={releaseDateSelected} />
               &nbsp;
               <Button onClick={ratingClickCb} caption='rating' selected={ratingSelected}/>
              </div>
          }}
          </SearchContext.Consumer>
  }
}


export {ResultHeader}


