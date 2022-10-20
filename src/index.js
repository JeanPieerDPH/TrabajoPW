import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaCompra from './componentes/ListaCompra';
import CrearCuenta from './componentes/CrearCuenta';
import OtraBarra from './componentes/OtraBarra';
import MainPage from './componentes/MainPage';
import OtraBarraPrincipal from './componentes/OtraBarraPrincipal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListaCompra></ListaCompra>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
