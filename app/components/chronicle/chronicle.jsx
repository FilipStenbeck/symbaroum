import React from 'react';
import Header from '../header/header.jsx';
import Logo from '../header/logo.jsx';

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
        <div className={item} key={model.number}>
            <a className="hiddenAnchor" id={model.title}>{model.title}</a>
            <h3 className={title}>{model.title} </h3>

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
            <div className="app">
            <div className="container">
              { chronicle.map((chronicle) => (
                  <ChronicleItem model={chronicle} key={chronicle.order}/>
              ))}
            </div>
        </div>
    </div>
    )
  }
}
