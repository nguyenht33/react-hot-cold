import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list.js';

describe('<GuessList/>', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders without crashing', () => {
        const values = [3, 5, 6]
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((guess, index) => {
          expect(items.at(index).text()).toEqual(guess.toString());
      });
    });
});
