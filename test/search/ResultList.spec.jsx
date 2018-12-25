import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {ResultList} from '|search/ResultList.jsx';
import {SearchContext} from '|search/SearchContext.jsx';
import {consts} from '|common/Consts.jsx'

const CONTEXT = {
    itemClickCb: jest.fn(),
    items: [
	{
	    id: 1,
	    poster_path: 'http://hello.com/poster.png',
	    title: 'Movie Title',
	    vote_average: 4.4,
	    release_date: '2011-01-01',
	    runtime: 129,
	    overview: 'This is a movie about ....',
	    genres: ['Horror', 'Thriller']
	},
	{
	    id: 2,
	    poster_path: 'http://hello.com/poster2.png',
	    title: 'Another Movie Title',
	    vote_average: 4.4,
	    release_date: '2012-02-02',
	    runtime: 139,
	    overview: 'This is another movie about ....',
	    genres: ['War', 'History']
	}

    ]
}

describe('ResultList rendering', () => {
  it('Should render', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={CONTEXT}>
               <ResultList />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('ResultList behaviour', () => {
  it('Should call callback when click on item', () => {
    const 
      resultHeader = mount(
            <SearchContext.Provider value={CONTEXT}>
               <ResultList />
            </SearchContext.Provider>),
      nativeLink = resultHeader.find('a').first();
    nativeLink.simulate('click');
    expect(CONTEXT.itemClickCb).toBeCalledWith(1)
  });

});

