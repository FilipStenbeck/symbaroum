import React from 'react';
import Header from '../header/header.jsx';

import {
    title,
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

const ChronicleItem = ({ model }) => {
    if (!model || !model.chroniclePart) {
        return false;
    }
    return (
        <div className={item} key={model.number}>

            <h2 className={title}>{model.title} </h2>

           { model.chroniclePart.map((model) => (
               <div className={part}>
                   <ChroniclePart model={model}/>
               </div>
           ))}
        </div>
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
            <div key={model.fields.title}>
              <div className="row">
                  { images.map((image) => (
                      <div className="column">
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
        <div key={model.fields.title}>
          <div className="row">
            <div className="column">
               {model.fields.text}
            </div>
            { images.map((image) => (
                <div className="column">
                    <ChronicleImage image={image}/>
                </div>
            ))}
          </div>
      </div>
    )
};

export default class Chronicle extends React.Component {

  render() {
    const { chronicle } = this.props;
    if (!chronicle) {
        return false;
    }
    return (
    <div>
        <Header choosen='chronicle'/>
      <div>
          { chronicle.map((chronicle) => (
              <ChronicleItem model={chronicle} key={chronicle.order}/>
          ))}
      </div>
    </div>
    )
  }
}
