import React from "react";
import {Header} from './components/NationalGeo';
import {Text} from './components/NationalGeo';

export function App(){
  return(
    <div className="main">
      <Header/>
      <p id="text">A horseshoe crab is seen swimming along the sea floor in coastal waters surrounding the Philippines.<br/> Horseshoe crabs are considered "living fossils", species that appear largely unchanged from their fossilized ancestors. </p>
      <Text/>
    </div>
  )
}