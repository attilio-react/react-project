import * as React from 'react';
import {mount} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

enzyme.configure({adapter: new Adapter()});

