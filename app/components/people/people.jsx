import React from 'react';
import { Link } from 'react-router'
import Beam from '../beam/beam.jsx'
import Filter from '../filter/filter.jsx'

import {
  people
} from "./people.css";

const flatten = require('lodash.flatten');
const uniq = require('lodash.uniq');
const includes = require('lodash.includes')

export default class People extends React.Component {

  componentDidMount() {
    let activeFilter = this.props.params.filter;
    this.props.setInitialFilter(activeFilter);
  }

  render() {
	const { params, people } = this.props;
    let activeFilter = params.filter;

    let tags = uniq(flatten(people.map((item) => item.tags)));
    let beams = [];

    //if filter is active only render a beam that has a tag that matches the active filter
    if (!activeFilter || activeFilter === 'alla') {
      beams = people;
    } else {
      beams = people.filter((beam) => {
        return includes(beam.tags.map((tag) => tag.toLocaleLowerCase()), activeFilter);
      });
    }

    return (
      <div>

        <Filter tags={tags} onClick={this.props.setActiveFilter}/>

        <div className={people}>
          <h1>Konsulter</h1>
        	{ beams.map((item) => (
              <Beam key={item.image} model={item}/>)
          )}
        </div>
      </div>
    )
  }
}
