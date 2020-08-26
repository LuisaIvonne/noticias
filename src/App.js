import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('general');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
         const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=80fa298d15974b3890cade9e46443205`;
         const respuesta = await fetch(url);
         const noticias = await respuesta.json();
         guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias
            noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
