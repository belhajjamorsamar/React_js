import React from 'react';
function Header(){
  const client ="designer"
  const title ={
    designer:"design",
    programmer:"programming"

  }

  const info={
    name:"samar",
    lastname:"belhajjamor"
  }
  return(
    <div className='navbar bg-dark rounded text-white'>
    Hello {`${info.name}   ${info.lastname}`}
         <h2 className="text-white">
          {client == "designer" ? title.designer : title.programmer}
          </h2>
      </div>
    );
}
export default Header;


  /*let title = ""; //if classique
  const client= "Designer";

  if(client=== "Designer"){
    title="Design is my Life"
  }
    else{
      title="Programming is my Life"

}*/


// Hello {info.name+ " " +info.lastname}  :: affichage normale ,concatination avec "+"
//Hello {`${info.name}  sdzfv  ${info.lastname}`} :: utiliser le backtec'`' pour l'afficher sans utliser le + pour la concatination on peut ajouter quelque entre les deux variables 