import React from 'react'
import Header from './Header'
import Team from './Team'
import Moncomposant from './Moncomposant';
import Personne from './Persone'

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
  <Personne nom="samar"   age="21"   sexe="femme"/>
  <Personne nom="oumayama" age="21"   sexe="femme"/>
  <Personne nom="thara"    age="23"  sexe="femme" />
    </div>
  );}
export default App;