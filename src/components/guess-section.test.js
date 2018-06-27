import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section.js';

describe('<GuessSection/>', () => {
    it('Renders without crashing', () => {
        const feedback = "You're Hot";
        const guessCount = 3;
        shallow(<GuessSection feedback={feedback} guessCount={guessCount} />);
    });
});
