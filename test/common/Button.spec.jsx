import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {Button} from '|common/Button.jsx';

describe('Button rendering', () => {
  it('Should render selected', () => {
    const component = renderer.create(<Button value='hello' selected='true' />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render not selected', () => {
    const component = renderer.create(<Button value='hello' />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Button behaviour', () => {
  it('Should call callback when clicked', () => {
    const onClick = jest.fn(),
      button = mount(<Button value='hello' onClick={onClick} />),
      nativeButton = button.find('input').first();
    nativeButton.simulate('click');
    expect(onClick).toBeCalled()
  });
});

