import React from 'react';
import Logo from '../header/logo.jsx';

import {
    npcContainer,
    info,
    imgContainer,
    npcImage,
    extraPadding
} from "./npc.css";

import {
    item
} from "../../../public/app.css";

import Header from '../header/header.jsx'

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
                         <a className="hiddenAnchor" id={people.name}>{people.name}</a>
                        <div className={"row " + item}>
                          <div className={"column"}>
                              <div className={imgContainer}>
                                  <img className={npcImage} src={people.portrait.fields.file.url} alt={people.name} title={people.name}/>
                              </div>
                          </div>
                            <div className={`${info} column`}>
                            <h3 className={extraPadding}>
                                {people.name}
                            </h3>
                                {people.description}
                          </div>
                        </div>
                      </div>
                  ))}
              </div>
          </div>
    </div>
    )
  }
}
