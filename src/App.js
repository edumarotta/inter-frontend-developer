import React, { useEfect, useEffect, useState} from 'react';

import './App.css';


import Header from './components/Header/Header';
import Conteudo from './components/Conteudo/Conteudo';




function App(props) {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 50){
        setAtivaCor(true);

      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll)
  })
  return (
    <div className="App">
      
      
        
        <Header acao={ativaCor}/>
        <Conteudo/>
  

        
      
      
    </div>
  );
}

export default App;
