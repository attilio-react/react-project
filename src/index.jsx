import React from 'react';
import {render} from 'react-dom';

import {TestComponent} from './TestComponent.jsx'

class App extends React.Component {
  render () {
    const testComponent = React.createElement(TestComponent, {text: 'Hello, world (React.createElement)'}, null),
          testComponent2 = <TestComponent text='Hello, world (React.Component)' />
    return [
       <div>Hello, world</div>,
       testComponent,
       testComponent2
    ];
  }
}

render(<App/>, document.getElementById('app'));
