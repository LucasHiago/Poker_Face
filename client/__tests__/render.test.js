import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App.jsx';

test('The application should render onto index.html', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').exists()).toBe(true);
});