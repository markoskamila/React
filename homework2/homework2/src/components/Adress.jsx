import React from "react";

export const Adresa =({users})=>{
  
    const peopleFromSkopje = users.filter(users=>users.adresa ==="Skopje");
    return(
        <div>
        <h2>People from Skopje:</h2>
        <ul>
        {peopleFromSkopje.map((users,i)=>(
            <li key={i}>{users.ime} {users.prezime} {users.adresa}</li>
        ))}
        </ul>
       
        </div>

    )
}
