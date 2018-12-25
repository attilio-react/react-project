import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {ResultHeader} from '|search/ResultHeader.jsx';
import {SearchContext} from '|search/SearchContext.jsx';
import {consts} from '|common/Consts.jsx'

const CONTEXT = {
    total: 50,
    releaseDateClickCb: jest.fn(),
    ratingClickCb: jest.fn()
}

describe('ResultHeader rendering', () => {
  it('Should render when sort by release date', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={{...CONTEXT, sortBy: consts.SORT_BY_RELEASE_DATE}}>
               <ResultHeader />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render when sort by rating', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={{...CONTEXT, sortBy: consts.SORT_BY_RATING}}>
               <ResultHeader />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});


