import React from 'react';

import {Button} from './common/Button.jsx';
import {Label} from './common/Label.jsx';
import {InputText} from './common/InputText.jsx';
import {SearchByContainer} from './SearchByContainer.jsx';

class MovieSearch extends React.PureComponent {
  render () {
    return <>
		  <p><Label text='FIND YOUR MOVIE' /></p>
		  <p><InputText inputValue='input' /></p>
		  <p>
		     <SearchByContainer />
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     &nbsp;
		     <Button caption='SEARCH' />
		  </p>
           </>;
  }
}


export {MovieSearch}


