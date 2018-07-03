import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count.js';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount guessCount="2" />);
    });

    it('Render guess count', () => {
      const test_count = 50;
      const wrapper = shallow(<GuessCount guessCount={test_count}/>)
      expect(wrapper.contains(test_count)).toEqual(true);
    });
});
