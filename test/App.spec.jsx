import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {App} from '|App.jsx';
import {ResultItem} from '|common/ResultItem.jsx';

describe('NoResult rendering', () => {
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

});


