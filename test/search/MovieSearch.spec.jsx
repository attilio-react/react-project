import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {MovieSearch} from '|search/MovieSearch.jsx';
import {SearchContext} from '|search/SearchContext.jsx';
import {consts} from '|common/Consts.jsx'

const CONTEXT = {
    total: 50,
    searchTermCb: jest.fn(),
    searchClickCb: jest.fn(),
    searchTerm: 'it',
    items: []
}

describe('MovieSearch rendering', () => {
  it('Should render', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={CONTEXT}>
               <MovieSearch />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('MovieSearch behaviour', () => {
  it('Should call callback when search term changes', () => {
    const 
      resultHeader = mount(
            <SearchContext.Provider value={CONTEXT}>
               <MovieSearch />
            </SearchContext.Provider>),
      nativeInput = resultHeader.find('input').first();
    nativeInput.simulate('change', {target: {value: 'new value'}});
    expect(CONTEXT.searchTermCb).toBeCalled()
  });

  it('Should call callback when search button is clicked', () => {
    const 
      resultHeader = mount(
            <SearchContext.Provider value={CONTEXT}>
               <MovieSearch />
            </SearchContext.Provider>),
      nativeButton = resultHeader.find('input[value="SEARCH"]').first();
    nativeButton.simulate('click');
    expect(CONTEXT.searchClickCb).toBeCalled()
  });

});

