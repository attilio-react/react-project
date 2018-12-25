import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {MovieData} from '|details/MovieData.jsx';
import {DetailsContext} from '|details/DetailsContext.jsx';

describe('MovieData rendering', () => {
  it('Should render', () => {
    const 
        component = renderer.create(
            <DetailsContext.Provider value = {{
                movie: {
                    poster_path: 'http://hello.com/poster.png',
                    title: 'Movie Title',
                    vote_average: 4.4,
                    release_date: '2011-01-01',
                    runtime: 129,
                    overview: 'This is a movie about ....'
                }
            }}>
                <MovieData />
            </DetailsContext.Provider>
        ),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});


