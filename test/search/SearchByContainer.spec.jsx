import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {SearchByContainer} from '|search/SearchByContainer.jsx';
import {SearchContext} from '|search/SearchContext.jsx';
import {consts} from '|common/Consts.jsx'

const CONTEXT = {
    titleClickCb: jest.fn(),
    genreClickCb: jest.fn()
}

describe('SearchByContainer rendering', () => {
  it('Should render when search by title', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={{...CONTEXT, searchBySelection: consts.SEARCH_BY_TITLE}}>
               <SearchByContainer />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render when sort by genre', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={{...CONTEXT, searchBySelection: consts.SEARCH_BY_GENRE}}>
               <SearchByContainer />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});

describe('SearchByContainer behaviour', () => {
  it('Should call callback when search by title clicked', () => {
    const 
      resultHeader = mount(
            <SearchContext.Provider value={{...CONTEXT, searchBySelection: consts.SEARCH_BY_TITLE}}>
               <SearchByContainer />
            </SearchContext.Provider>),
      nativeButton = resultHeader.find('input').first();
    nativeButton.simulate('click');
    expect(CONTEXT.titleClickCb).toBeCalled()
  });

  it('Should call callback when search by genre clicked', () => {
    const 
      resultHeader = mount(
            <SearchContext.Provider value={{...CONTEXT, searchBySelection: consts.SEARCH_BY_TITLE}}>
               <SearchByContainer />
            </SearchContext.Provider>),
      nativeButton = resultHeader.find('input').at(1);
    nativeButton.simulate('click');
    expect(CONTEXT.genreClickCb).toBeCalled()
  });

});

