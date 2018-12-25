import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {SearchResult} from '|search/SearchResult.jsx';
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
    ],
    total: 2
}

describe('SearchResult rendering', () => {
  it('Should render with elements', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={CONTEXT}>
               <SearchResult />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render without elements', () => {
    const 
        component = renderer.create(
            <SearchContext.Provider value={{...CONTEXT, items: []}}>
               <SearchResult />
            </SearchContext.Provider>),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});


