import React from 'react';

class Button extends React.PureComponent {
  render () {
    const {selected} = this.props
    return <input type="button" value={this.props.caption} style={{textDecoration: selected ? 'underline' : 'none'}}></input>;
  }
}


export {Button}


