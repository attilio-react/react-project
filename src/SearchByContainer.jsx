import React from 'react';

import {Label} from './Label.jsx';
import {Button} from './Button.jsx';

class SearchByContainer extends React.PureComponent {
  render () {
    return <>
		  <Label text='SEARCH BY' />
		  &nbsp;
		  <Button caption='TITLE' selected={true} />
		  &nbsp;
		  <Button caption='GENRE' />
           </>;
  }
}


export {SearchByContainer}


