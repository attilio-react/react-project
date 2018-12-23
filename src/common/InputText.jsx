import React from 'react';

class InputText extends React.PureComponent {
  render () {
    return <input type="text" onChange={this.props.onChange} value={this.props.inputValue}></input>;
  }
}


export {InputText}


