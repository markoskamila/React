import React from "react";
import "./../assets/css/NationalGeo.css";

export const Header = () =>{
    return(
        <div className="naslov">
            <h2 id="h2">These 5 'living fossils' still roam the Earth</h2>
            <p id="p">Hundreds of millions of years later, these species are nearly <br/>indistinguishable from their prehistoric ancestors.</p>
            <img id="pic"src="https://i.natgeofe.com/n/e51778cc-eb29-4a5c-be11-1f4c1d4bae87/NationalGeographic_2789928_16x9.jpg?w=718&h=404" alt="horseshoe crab"/>

        </div>
    )
};

export const Text = ()=>{
    return(
        <p id="paragraphs">On beaches spanning the Atlantic Coast from Maine down to the gulf of Mexico, thousands of murky brown shells carpet the sand. <br/>Spawning season is just beginning, and swarms of horseshoe crabs dot the intertidal zone to lay their eggs—an unfailing, ancient phenomenon that stretches back millions of years.<br/>Horseshoe crabs dominated the seas as far back as the Ordovician, a geological epoch that took place 488 to 443 million years ago. 
        <hr/>
        Known as “living fossils,” organisms like horseshoe crabs are descendents of ancient lineages and look nearly identical to their fossilized ancestors from hundreds of millions of years ago. 
        </p>
    )

}

