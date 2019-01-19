import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {App} from '|App.jsx';
import {ResultItem} from '|common/ResultItem.jsx';
import {MovieData} from '|details/MovieData.jsx';
import {consts} from '|common/Consts.jsx';

describe('Rendering', () => {
  it('Should render without results', () => {
    const 
        component = renderer.create(<App />),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Should render with results', (done) => {
    const 
        component = mount(<App />)
    component.setState({
        total: 10,
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
    }, () => {
        expect(component.find(ResultItem).length).toBe(2);
        done()
    })
  });

  it('Should render with details', (done) => {
    const 
        component = mount(<App />)
    component.setState({
        screen: consts.DETAIL_SCREEN,
        selectedMovie: 
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
        sameGenreMovies: [
	    {
		id: 2,
		poster_path: 'http://hello.com/poster2.png',
		title: 'Another Movie Title',
		vote_average: 4.4,
		release_date: '2012-02-02',
		runtime: 139,
		overview: 'This is another movie about ....',
		genres: ['War', 'History', 'Horror']
	    },
	    {
		id: 3,
		poster_path: 'http://hello.com/poster3.png',
		title: 'Yet Another Movie Title',
		vote_average: 4.5,
		release_date: '2012-03-02',
		runtime: 129,
		overview: 'This is yet another movie about ....',
		genres: ['Horror', 'History']
	    },
	    {
		id: 4,
		poster_path: 'http://hello.com/poster4.png',
		title: 'And Yet Another Movie Title',
		vote_average: 3.5,
		release_date: '2013-03-02',
		runtime: 127,
		overview: 'This is yet another movie about ....',
		genres: ['Horror', 'History', 'War']
	    }
        ],
        selectedMovieGenres: ['Horror', 'Thriller']

    }, () => {
        expect(component.find(ResultItem).length).toBe(3);
        expect(component.find(MovieData).length).toBe(1);
        done()
    })
  });
});


describe('Actions', () => {
  it('Should be able to search for movies', (done) => {
    const 
        component = mount(<App />),
        RESPONSE = {"data":[{"id":1,"title":"Title","tagline":"Tagline","vote_average":6.1,"vote_count":1195,"release_date":"2018-02-07","poster_path":"http://path/to/poster.jpg","overview":"OVERVIEW","budget":1,"revenue":2,"genres":["Drama"],"runtime":3}, {"id":2,"title":"Title2","tagline":"Tagline2","vote_average":6.2,"vote_count":1198,"release_date":"2018-02-08","poster_path":"http://path/to/poster2.jpg","overview":"OVERVIEW2","budget":2,"revenue":3,"genres":["Thriller"],"runtime":4}],"total":2,"offset":0,"limit":10}

    fetch.mockResponseOnce(JSON.stringify(RESPONSE))

    component.setState({
        searchTerm: 'movie title'
    }, () => {
        component.instance().searchMovies(() => {
            component.update()
            expect(component.find(ResultItem).length).toBe(2);
            done()
        })
    })
  });
})
