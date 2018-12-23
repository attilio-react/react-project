import React from 'react';

import {Label} from './common/Label.jsx';
import {Button} from './common/Button.jsx';

class ResultItem extends React.PureComponent {
  render () {
    const {item} = this.props;
    return <div>
                  <p><img src={item.poster_path} /></p>
                  <p>
		     <Label text={item.release_date} />
		     &nbsp;
                     <Label text={item.genres.join(', ')} />
		  </p>
                  <p><Label text={item.title} /></p>
                  
           </div>;
  }
}


export {ResultItem}


