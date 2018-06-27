import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list.js';

describe('<GuessList/>', () => {
    it('Renders without crashing', () => {
        const guesses = [3, 5, 6]
        shallow(<GuessList guesses={guesses} />);
    });

    it('Renders without crashing', () => {
        const test_guesses = [3, 5, 6]
        const wrapper = shallow(<GuessList guesses={test_guesses} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(test_guesses.length);
        test_guesses.forEach((guess, index) => {
          expect(items.at(index).text()).toEqual(guess.toString());
      });
    });
});
