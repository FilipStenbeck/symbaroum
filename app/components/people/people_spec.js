const React = require('react');
const assert = require('assert');
const { shallow } = require('enzyme');
const people = require('./people.jsx');

describe('People', () => {

	const mockProps = {

	};

    it('should render nothing if called with no props', () => {
		const wrapper = shallow(<people />);
		assert.equal(wrapper.html(), '<people></people>');
    });

});
