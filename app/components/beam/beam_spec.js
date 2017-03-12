import React  from 'react';
import assert from  'assert';
import { shallow, mount }  from 'enzyme';
import Beam from './beam.jsx'

describe('Beam', () => {

    it('should render nothing if called with no props', () => {
		const wrapper = shallow(<beam />);
		assert.equal(wrapper.html(), '<beam></beam>');
    });

});
