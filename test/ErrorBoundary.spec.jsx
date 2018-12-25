import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {ErrorBoundary} from '|ErrorBoundary.jsx';
import {ResultItem} from '|common/ResultItem.jsx';

describe('NoResult rendering', () => {
  it('Should render when there are no errors', () => {
    const 
        component = renderer.create(<ErrorBoundary><div>Test</div></ErrorBoundary>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render with errors', () => {
    const 
        component = renderer.create(<ErrorBoundary><ResultItem /></ErrorBoundary>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});


