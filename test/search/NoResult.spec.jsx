import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {NoResult} from '|search/NoResult.jsx';

describe('NoResult rendering', () => {
  it('Should render', () => {
    const 
        component = renderer.create(<NoResult />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});


