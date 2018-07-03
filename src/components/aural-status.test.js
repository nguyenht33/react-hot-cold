import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('Render without crashing', () => {
    shallow(<AuralStatus auralStatus="Foo" />);
  });

  it('Renders an aural status update', () => {
    let aural_status = 'You are listening to a game!';

    let wrapper = shallow(<AuralStatus auralStatus={aural_status} />);
    expect(wrapper.contains(aural_status)).toEqual(true);
  });
});
