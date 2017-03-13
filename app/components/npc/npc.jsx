import React from 'react';

import {
    info,
    imgContainer,
    people,
    npcContainer,
    npcImage
} from "./npc.css";

export default class Npc extends React.Component {


  render() {
    const { npc } = this.props;
    if (!npc) {
        return;
    }
    return (
      <div>
        <div>
          <h1>NPCs</h1>

          { npc.map((people) => (

              <div key={people.name} className={people}>
                <div className={"row " + npcContainer}>
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
