import React from 'react';

import {Label} from './common/Label.jsx';
import {Button} from './common/Button.jsx';

class ResultItem extends React.PureComponent {
  render () {
    const {item} = this.props;
    return <div>
                  <p><img src={item.imgSrc} /></p>
                  <p>
		     <Label text={item.releaseDate} />
		     &nbsp;
                     <Label text={item.genre} />
		  </p>
                  <p><Label text={item.title} /></p>
                  
           </div>;
  }
}


export {ResultItem}


