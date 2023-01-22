import { render } from "@testing-library/react";
import React from "react";//importaton de la bibliotheque react 
import ReactDOM  from "react-dom";//importation de la bibliotheque recatdom (interface)
import App from './components/App';
ReactDOM.render(
  //JSX :langage d'interface pour react js
 <App />//appel  de fonction App
,document.getElementById('root'));