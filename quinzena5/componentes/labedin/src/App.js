import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
         <h2>Dados pessoais</h2>      
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1064703531175870464/KPzfrIiU.jpg" 
          nome="Ingrid Ferreira" 
          descricao="Oi, eu sou a Ingrid. Tenho 28 anos, e trabalho como analista de suporte, a quase 7 anos em uma agencia de publicidade. Estou em processo de mudança na minha carreira. Por causa desse desejo de mudança que comecei o curso na Labenu. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/png/512/16/16475.png" 
          email="E-mail" 
          descricao="ingrid.ferreira@hotmail.com" 
        />
        
        <CardPequeno
          imagem="https://i.pinimg.com/564x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg" 
          endereco="Endereço" 
          descricao="Rua dos Programadores - Labecity" 
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
