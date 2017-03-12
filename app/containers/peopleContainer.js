import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import People from '../components/people/people.jsx'

import {
	setNewFilter
} from '../actions'

const mapStateToProps = (state) => {
  return {
      people: (state.people && state.people.data && state.people.data.length ) ? state.people.data : [],
      activeFilter: (state.filter) ? state.filter : 'alla',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveFilter: (event) => {
      event.preventDefault();
      let activeFilter = event.target.href.substring(event.target.href.lastIndexOf('/') + 1);
      dispatch(setNewFilter(activeFilter));
      browserHistory.push('/people/' + activeFilter)
    },
    setInitialFilter: (filter) => {
      dispatch(setNewFilter(filter || 'alla'));
    }
  }
}

const PeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(People)

export default PeopleContainer
