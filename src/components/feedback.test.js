import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback.js';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback feedback="cold" guessCount="2" />);
    });

    it('Renders the feedback text', () => {
      const test_feedback = "You're Hot";
      const wrapper = shallow(<Feedback feedback={test_feedback} />);
      expect(wrapper.contains(test_feedback)).toEqual(true);
  });
});
