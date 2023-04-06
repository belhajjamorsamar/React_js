import React from 'react'
import Header from './Header'
import Team from './Team'


function App(){
  function apple(){
    alert('Hello from apple')
  }
  return(
    <div className='container'>
      <h2>Hello i'm Heare</h2>
   <button onClick={apple}>click md</button>
    </div>
  );}
export default App;