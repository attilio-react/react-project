import React from 'react';

import {Label} from 'Common/Label.jsx';
import {Button} from 'Common/Button.jsx';

class ResultItem extends React.PureComponent {

 render () {
    const {item, clickCallback} = this.props,
          self = this;
    return <div><a onClick={() => {clickCallback(item.id)}}>
                  <p><img src={item.poster_path} /></p>
                  <p>
		     <Label text={item.release_date} />
		     &nbsp;
                     <Label text={item.genres.join(', ')} />
		  </p>
                  <p><Label text={item.title} /></p>
                 </a> 
           </div>;
  }
}


export {ResultItem}


