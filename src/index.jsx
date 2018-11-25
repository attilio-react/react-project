import React from 'react';
import {render} from 'react-dom';

import {TestComponent} from './TestComponent.jsx'
import {TestPureComponent} from './TestPureComponent.jsx'

class App extends React.Component {
  render () {
    const testComponent = React.createElement(TestComponent, {text: 'Hello, world (React.createElement)'}, null),
          testComponent2 = <TestComponent text='Hello, world (React.Component)' />,
          testPureComponent = <TestPureComponent text='Hello, world' />
    return [
       <div>Hello, world</div>,
       testComponent,
       testComponent2,
       testPureComponent
    ];
  }
}

render(<App/>, document.getElementById('app'));
