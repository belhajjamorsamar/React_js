import React from 'react';



//il ya deux types du composant ---> 1 :function  , 2:Class

// 1 : function

/*function Componenet(){
    return(
        <h1>Hii I'm a function Componenet</h1>

    );

}*/


// 2: Class : <div></div> 
 /*class Componenet  extends React.Component{
    render(){

        return(
            <div>
                <h1>Hi i'm a Class Componenet</h1>
            </div>
        );
    }


 } */


 
// 2: Class : []  : utiliser un tablaux pour  retourner plusieurs element
class Componenet  extends React.Component{
    render(){

        return(
            [
                <h1>Hi i'm a Class Componenet</h1>,
                <h2> Enclosed by table</h2>
            ]
        );
    }


 } 

export default Componenet;