import React, { Component } from 'react';
import logo from './erick.jpg';
import logo2 from './datos.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hoja de Vida - Erick Martínez</h1>
          <img src={logo} class="App-logo" />
        </header>
        <DatosPersonales />
        <EstudiosRealizados />
        <PerfilProfesional />
      </div>
    );
  }
}

class DatosPersonales extends Component {
  render() {
    return (
      <div className="App-body">
        
        <h2>Datos Personales</h2>
        <p>
          <strong>Nombre:</strong> Erick Bernardo Martinez Ramirez<br />
          <strong>Documento de Identidad:</strong> 0801-1999-06399<br />
          <strong>Fecha de Nacimiento:</strong> 22 de Marzo de 1999<br />
          <strong>Lugar de Nacimiento: </strong> Tegucigalpa, Honduras<br />
          <strong>Estado Civil:</strong> Soltero<br />
          <strong>Ciudad:</strong> Tegucigalpa - Honduras<br />
          <strong>Dirección:</strong> Col. Miraflores, Tegucigalpa<br />
          <strong>Telefono:</strong> 2228-4754 / 3185-8580<br />
          <strong>Correo:</strong> erickmartinez2203@gmail.com<br />
        </p>
      </div>
    );
  }
}

class EstudiosRealizados extends Component {
  render() {
    return (
      <div className="App-body2">
        <h2>Estudios Realizados</h2>
        <p2>
          <strong>Estudios Primarios:</strong> Hillcrest School (2005-2011)<br />
          <strong>Estudios Secundarios:</strong> Hillcrest School (2012-2016)<br />
          <strong>Idiomas Extranjeros:</strong> Ingles e Italiano<br />
        </p2>
      </div>
    );
  }
}

class PerfilProfesional extends Component {
  render() {
    return (
      <div className="App-body3">
        <h2>Perfil Profesional</h2>
        <p3>
          Pasante de la carrera Ingenieria en Sistemas Computacionales en la Universidad Tecnologica Centroamericana
          UNITEC, campus Tegucigalpa. He cursado hasta el mes de diciembre 2018, nueve periodos, sumando 35 clases
            aprobadas.<br />
          Soy responsable, bastante dinamico, con deseos de superacion y mis metas estan basadas en el logro de
          objetivos claros; aprendo rapido y cumplo de manera adecuada con puntualidad, honestidad y responsabilidad
            las distintas actividades que realizo.<br />
        </p3>
      </div>
    );
  }
}
export default App;

