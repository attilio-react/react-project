import React from 'react';
import renderer from 'react-test-renderer';
import {Label} from '|common/Label.jsx';

describe('Label (Snapshot)', () => {
  it('Label renders the text', () => {
    const component = renderer.create(<Label text='hello' />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

