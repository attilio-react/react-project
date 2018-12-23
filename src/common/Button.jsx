import React from 'react';

class Button extends React.PureComponent {
  render () {
    const {selected, onClick, caption} = this.props
    return <input type="button" onClick={onClick}  value={caption} style={{textDecoration: selected ? 'underline' : 'none'}}></input>;
  }
}


export {Button}


