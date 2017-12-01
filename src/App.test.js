import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

})
