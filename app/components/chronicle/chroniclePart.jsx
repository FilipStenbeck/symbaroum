import React from 'react';
import Header from '../header/header.jsx';

import {
    display,
    part
} from "./chronicle.css";

import {
    item
} from "../../../public/app.css";

const ChronicleImage = ({image}) => {
    if (!image) {
        return false;
    }
    return (
        <img className={display} src={image.fields.file.url}/>
    )
};

const ChroniclePart = ({ model }) => {
    if (!model) {
        return;
    }
    const images = model.fields.images || [];
    const imagestartLeft = model.fields.imageStartsLeft;

    if (imagestartLeft) {
        return (
            <div>
              <div className="row">
                  { images.map((image) => (
                      <div className="column" key={image.title}>
                          <ChronicleImage image={image}/>
                      </div>
                  ))}
                <div className="column">
                   {model.fields.text}
                </div>
              </div>
          </div>
        )
    }
    return (
        <div>
          <div className="row">
            <div className="column">
               {model.fields.text}
            </div>
            { images.map((image) => (
                <div className="column" key={image.title}>
                    <ChronicleImage image={image}/>
                </div>
            ))}
          </div>
      </div>
    )
};

export default ChroniclePart;
