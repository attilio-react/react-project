import React from 'react';
import {Link} from "react-router-dom";

class LinkButton extends React.PureComponent {
  render () {
    const {caption, to} = this.props,
          safeTo = to ? to : '/'
    return <Link to={safeTo}>
                <button>
                    {caption}
                </button>
           </Link>
  }
}


export {LinkButton}


