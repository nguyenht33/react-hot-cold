import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section.js';

describe('<GuessSection/>', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
});
