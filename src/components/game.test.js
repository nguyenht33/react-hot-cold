import React from 'react';
import {shallow} from 'enzyme';

import Game from './game.js';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});
