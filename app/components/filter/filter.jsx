import React from 'react';

import {
  filter,
  filterLink
} from "./filter.css";

const Filter = (props) => {
  const buildRouteFromName = (name) => "/people/" + name.toLowerCase()
  if (!props.tags) { return (<noscript/>); }
  let tags = props.tags;
  return (
    <div className={"row"}>
      <div className="column">
      <a className={filterLink} key="alla" onClick={props.onClick} href={buildRouteFromName('alla')}>Alla</a>
      </div>
      {props.tags.map((tag) => <div className="column"> <a className={filterLink} key={tag} onClick={props.onClick} href={buildRouteFromName(tag)}>{tag}</a> </div>)}
    </div>
   );
}

export default Filter;
