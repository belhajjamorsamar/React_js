import React from 'react'
import Header from './Header'
import Team from './Team'
import Moncomposant from './Moncomposant'

function MonCompsant(){
return (
  <div>
<h1> Coucou </h1>
<p>mon prénom est Samar ,mon nom est BELHAJJAMOR</p>
<Moncomposant/>
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