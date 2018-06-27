import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form.js';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
      shallow(<GuessForm />);
    });

    it('Should fire onMakeGuess when the form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onMakeGuess={callback} />);
      const value = '50';
      wrapper.find('input[type="number"]').instance().value = value;
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onMakeGuess if input is empty', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onSubmit={callback} />);
      wrapper.simulate('submit');
      expect(callback).not.toHaveBeenCalled();
    });
});
