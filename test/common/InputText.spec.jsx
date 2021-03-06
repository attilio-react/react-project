import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {InputText} from '|common/InputText.jsx';


describe('InputText rendering', () => {
  it('Should render', () => {
    const component = renderer.create(<InputText value='hello' />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('InputText behaviour', () => {
  it('Should call callback when changed', () => {
    const onChange = jest.fn(),
      input = mount(<InputText value='hello' onChange={onChange} />),
      nativeInput = input.find('input').first();
    nativeInput.simulate('change');
    expect(onChange).toBeCalled()
  });
});

