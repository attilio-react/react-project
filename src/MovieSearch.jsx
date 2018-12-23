import React from 'react';

import {consts} from './Consts.jsx'

import {SearchContext} from './SearchContext.jsx'

import {Button} from './common/Button.jsx';
import {Label} from './common/Label.jsx';
import {InputText} from './common/InputText.jsx';
import {SearchByContainer} from './SearchByContainer.jsx';

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
                </>
            )}
            </SearchContext.Consumer>)
  }

}


export {MovieSearch}


