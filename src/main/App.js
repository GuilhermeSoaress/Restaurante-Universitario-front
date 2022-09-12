import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import Rotas from './rotas'
import NavBar from '../componentes/navbar';
import "../style.css"

import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min'
class App extends React.Component{
  render(){
    return(
      <>
      <NavBar></NavBar>
      <div className='container'>
        <Rotas></Rotas>        
      </div>
        
      </>
      
    )
  }
}

export default App;
