
import React ,{Component} from 'react';

/*const personne = props => {

    return (
        <>
        <h3>{props.nom}</h3>
        <div>Age :{props.age}</div>
        <div>Sexe :{props.sexe}</div>

        </>
    );

}*/

class Personne extends React.Component{
    /*constructor(props){
        super(props);        // Ancien methode pour utiliser props
    } */


render(){
    return(
        <>
        <h3>{this.props.nom}</h3>
        <div>Age :{this.props.age}</div>
        <div>Sexe :{this.props.sexe}</div>

        </>

    );
}
}

export default Personne;
