import React from 'react';

import {
    info,
    imgContainer,
    npcImage
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
            <div className="container">
                { npc.map((people) => (

                  <div id={people.name} key={people.name}>
                    <div className={"row " + item}>
                      <div className={"column"}>
                          <div className={imgContainer}>
                              <img className={npcImage} src={people.portrait.fields.file.url} alt={people.name} title={people.name}/>
                          </div>
                      </div>
                        <div className={`${info} column`}>
                        <h3>
                            {people.name}
                        </h3>
                            {people.description}
                      </div>
                    </div>
                  </div>
              ))}
          </div>
      </div>
    )
  }
}
