import React from 'react';
function Header(){
  let title ="";
  const client="Designer";
/*
  if(client=== "Designer"){
    title="Design is my Life"
  }
    else{
      title="Programming is my Life"

}*/ 


   const Client="Designer";
   const Title = {
    designer :"Design",
    programmer:"Programming"
   }
   const info = {
    name:"Samar",
    nick:"Belhajj amor"
   }

  
  return(
    <div className='navbar bg-dark rounded text-white'>
         Hello {`${info.name} ${info.nick}`}
         <h2 > {Client == "Designer" ? Title.designer:Title.programmer } is my Life.
         </h2>

      </div>
    );
}
export default Header;
