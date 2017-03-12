import React from 'react';

import {
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
                  <div className={"column column-40"}>
                      <img className={npcImage} src={people.portrait.fields.file.url} alt={people.name} title={people.name}/>

                  </div>
                    <div className={"column column-60"}>
                    <h2>
                        {people.name}
                    </h2>
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
