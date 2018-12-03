import React from 'react';

import {Label} from './Label.jsx';
import {InputText} from './InputText.jsx';

class MovieSearch extends React.PureComponent {
  render () {
    return <>
		  <Label text='netflixroulette' />
		  <Label text='FIND YOUR MOVIE' />
		  <InputText inputValue='input' />
           </>;
  }
}


export {MovieSearch}


