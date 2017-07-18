import React from 'react';

import {
    info,
    imgContainer,
    npcImage,
    extraPadding
} from "./npc.css";

import {
    item
} from "../../../public/app.css";

import Header from '../header/header.jsx'

const NpcItem = ({ model }) => {
    if (!model) {
        return false;
    }
    return (
        <div data-aos="fade-up" className={item} key={model.name}>
            <a className="hiddenAnchor" id={model.name}>{model.name}</a>
            <div className={"row"}>
             <div className={"column"}>
                 <div className={imgContainer}>
                     <img className={npcImage} src={model.portrait.fields.file.url} alt={model.name} title={model.name}/>
                 </div>
             </div>
               <div className={`${info} column`}>
               <h3 className={extraPadding}>
                   {model.name}
               </h3>
                   {model.description}
             </div>
           </div>
        </div>
    )
};

export default class Npc extends React.Component {


  render() {
    const { npc } = this.props;
    if (!npc) {
        return;
    }
    return (
        <div>
            <Header choosen='npc' links={npc.map((people) => people.name)}/>
            <div className="app">
                <div className="container">
                    { npc.map((people) => (
                      <div key={people.name}>
                          <NpcItem model={people}/>
                      </div>
                  ))}
              </div>
          </div>
    </div>
    )
  }
}
