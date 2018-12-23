import React from 'react';

import {consts} from 'Common/Consts.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Button} from 'Common/Button.jsx';
import {Label} from 'Common/Label.jsx';
import {InputText} from 'Common/InputText.jsx';
import {SearchByContainer} from './SearchByContainer.jsx';
import {SearchResult} from './SearchResult.jsx';

class MovieSearch extends React.PureComponent {
  render () {
    return (<SearchContext.Consumer>
            {ctx => (
               <>
		  <p><Label text='FIND YOUR MOVIE' /></p>
		  <p><InputText onChange={ctx.searchTermCb} inputValue={ctx.searchTerm} /></p>
		  <p>
		     <SearchByContainer />
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     <Button onClick={ctx.searchClickCb} caption='SEARCH' />
		  </p>
                  <SearchResult />
                </>
            )}
            </SearchContext.Consumer>)
  }

}


export {MovieSearch}


