import React from 'react';

import {consts} from 'Common/Consts.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Label} from 'Common/Label.jsx';
import {Button} from 'Common/Button.jsx';

class SearchByContainer extends React.PureComponent {
  render () {
    return (<SearchContext.Consumer>
            {ctx => {
                  const
                    {titleClickCb, genreClickCb, searchBySelection} = ctx,
                    selectTitle = (searchBySelection == consts.SEARCH_BY_TITLE),
                    selectGenre = (searchBySelection == consts.SEARCH_BY_GENRE)
                  
                 return <>
		    <Label text='SEARCH BY' />
		    &nbsp;
		    <Button caption='TITLE' onClick={titleClickCb} selected={selectTitle} />
		    &nbsp;
		    <Button caption='GENRE' onClick={genreClickCb} selected={selectGenre} />
                  </>
            }}
           </SearchContext.Consumer>);
  }
}


export {SearchByContainer}


