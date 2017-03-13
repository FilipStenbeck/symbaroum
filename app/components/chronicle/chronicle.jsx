import React from 'react';

import {
    title,
    image,
    container,
    part
} from "./chronicle.css";

const ChronicleImage = ({image}) => {
    if (!image) {
        return false;
    }
    return (
        <img className={image} src={image.fields.file.url}/>
    )
};

const ChronicleItem = ({ model }) => {
    if (!model || !model.chroniclePart) {
        return false;
    }
    return (
        <div className={container} key={model.number}>

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
        <h1>Krönika</h1>
      <div>
          { chronicle.map((chronicle) => (
              <ChronicleItem model={chronicle} key={chronicle.order}/>
          ))}
      </div>
    </div>
    )
  }
}
