import React from "react";
import { Age } from "./components/Age";
import { Adresa } from "./components/Adress";

export function App(){

  var users=[
  { ime: "Zoran",
    prezime:"Petreski",
    adresa: "Biola",
    godini:18,
  },
  {
    ime:"Milan",
    prezime:"Saveski",
    adresa:"Skopje",
    godini:23,
  },
  {
    ime:"Jovana",
    prezime:"Markoska",
    adresa:"Prilep",
    godini:16,
  },
  {
    ime:"Emilija",
    prezime:"Tasevska",
    adresa:"Ohrid",
    godini: 27,
  }
]
return(
  <div id="app">
    <Age users={users}/>
    <Adresa users={users}/>

  </div>
)
}