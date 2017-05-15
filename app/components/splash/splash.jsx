import React from 'react';
import Header from '../header/header.jsx';
import Logo from '../header/logo.jsx';



import {
    title,
    display,
    part
} from "./splash.css";

import {
    item
} from "../../../public/app.css";


export default class Splash extends React.Component {

  render() {
    return (
        <div>
            <Header choosen='none' splash/>
            <div className="app">
            <div className="container">
              <Logo/>
            </div>
        </div>
    </div>
    )
  }
}
