import React from "react";

export const Age = ({ users }) => {
    
    const olderThan18 = users.filter(users => users.godini >= 18);
    const under19YearsOld = users.filter(users=> users.godini <18);
  
    return (
      <div>
        <h2>18 years old or above:</h2>
            <ul>
                {olderThan18.map ((users, i) => (
                <li key={i}>
                  {users.ime} {users.prezime} {users.godini} years old
                </li>
               ))}
            </ul>

        <h2>Users under the godini of 18:</h2>
            <ul>
                {under19YearsOld.map((users, i)=>(
                    <li key = {i}>
                        {users.ime} {users.prezime} {users.godini}
                    </li>

                ))}
            </ul>
        </div>


        );
}



        