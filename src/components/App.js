import React from 'react'
import Header from './Header'
import Team from './Team'


function MonCompsant(){
return (
  <div>
<h1> mon nom est BELHAJJAMOR </h1>
<h2>mon prénom est Samar</h2>
  </div>
);

}

function App(){
  function apple(){
    alert('Hello from apple')
  }
  return(
    <div className='container'>
      <h2>Hello i'm Heare</h2>
   <button onClick={apple}>click md</button>
   <MonCompsant/>
    </div>
  );}
export default App;