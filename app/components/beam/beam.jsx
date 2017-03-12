import React from 'react';
import { Link } from 'react-router'
import {
  beam,
  beamContainer,
  beamImage
} from "./beam.css";

const Beam = (props) => {
 if (!props.model) { return null; }
  let { description, first_name, image, last_name, tags, title } = props.model;

  return (

  <div className={beam}>
    <div className={"row " + beamContainer}>
      <div className={"column column-40"}>
        <img className={beamImage} src={image} alt={first_name} title={title}/>
      </div>
        <div className={"column column-60"}>
        <h2>
          {first_name} {last_name}
        </h2>
        {description}
      </div>
    </div>

  </div>
	 );
}

export default Beam;
