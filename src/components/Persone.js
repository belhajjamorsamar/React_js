
import React from 'react';

function personne(props){

    return (
        <>
        <h3>{props.nom}</h3>
        <div>Age :{props.age}</div>
        <div>Sexe :{props.sexe}</div>

        </>
    );

}
export default personne;
