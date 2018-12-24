import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {ResultItem} from '|common/ResultItem.jsx';


const MOVIE_ID = 42,
      movie = {
       'id': MOVIE_ID,
       'title': 'test movie',
       'tagline': 'the best movie ever',
       'vote_average': 5.0,
       'vote_count': 99999,
       'release_date': '1970-01-01',
       'poster_path': 'http://example.com/poster.png',
       'overview': 'this is the best movie ever created',
       'budget': 9999999,
       'revenue': 999999999,
       'runtime': 123,
       'genres': ['Drama', 'Thriller', 'Comedy', 'War', 'Horror', 'All']
     }


describe('ResultItem rendering', () => {
  it('Should render result item', () => {
    const component = renderer.create(<ResultItem item={movie} />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('ResultItem behaviour', () => {
  it('Should call callback when clicked', () => {
    const onClick = jest.fn(),
      resultItem = mount(<ResultItem item={movie} clickCallback={onClick} />),
      nativeLink = resultItem.find('a').first();
    nativeLink.simulate('click');
    expect(onClick).toBeCalledWith(MOVIE_ID)
  });
});

