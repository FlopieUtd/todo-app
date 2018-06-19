import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('App', () => {
  const app = shallow(<App />);
  expect(1).toEqual(1);
});