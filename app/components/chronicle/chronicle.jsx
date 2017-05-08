import React from 'react';
import Header from '../header/header.jsx';
import ChroniclePart from './chroniclePart.jsx'

import {
    title,
    display,
    part
} from "./chronicle.css";

import {
    item
} from "../../../public/app.css";

const ChronicleItem = ({ model }) => {
    if (!model || !model.chroniclePart) {
        return false;
    }
    return (
        <div id={model.title} className={item} key={model.number}>

            <h2 className={title}>{model.title} </h2>

           { model.chroniclePart.map((model) => (
               <div className={part} key={model.sys.id}>
                   <ChroniclePart model={model}/>
               </div>
           ))}
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
        <Header choosen='chronicle' links={chronicle.map((chronicle) => chronicle.title)}/>
      <div>
          { chronicle.map((chronicle) => (
              <ChronicleItem model={chronicle} key={chronicle.order}/>
          ))}
      </div>
    </div>
    )
  }
}
