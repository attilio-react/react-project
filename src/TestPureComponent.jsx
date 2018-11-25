import React from 'react';

class TestPureComponent extends React.PureComponent {
  render () {
    return <div>{`${this.props.text} (PureComponent)`}</div>;
  }
}


export {TestPureComponent}


