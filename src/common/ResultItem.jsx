import React from 'react';
import {Link} from "react-router-dom";

import {paths} from 'Common/Paths.jsx';

import {Label} from 'Common/Label.jsx';
import {Button} from 'Common/Button.jsx';

class ResultItem extends React.PureComponent {

 render () {
    const {item, clickCallback} = this.props,
          self = this;
    return <div style={{border: '1px solid black'}}><Link to={paths.DETAILS_PATH + item.id}>
                  <p><img src={item.poster_path} /></p>
                  <p>
		     <Label text={item.release_date} />
		     &nbsp;
                     <Label text={item.genres.join(', ')} />
		  </p>
                  <p><Label text={item.title} /></p>
                 </Link> 
           </div>;
  }
}


export {ResultItem}


