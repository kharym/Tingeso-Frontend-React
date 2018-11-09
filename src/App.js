import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {productos} from './productos.json'; // importar datos
import IngresarProducto from './components/IngresarProducto';
console.log(productos);

class App extends Component {
  constructor(){
    super();
    this.state = {
      productos
    }
    this.agregarProducto = this.agregarProducto.bind(this);
  }

 agregarProducto(productos) {
   this.setState({
     productos: [...this.state.productos, productos]       // agrega un producto al arreglo de estados
   })
 }

 borrarProducto(index) {
   this.setState({
     productos: this.state.productos.filter((e, i) => {
       return i !== index
     })
   });
 }

  render() {
    const productos = this.state.productos.map((producto,i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className= "card-header">
              <h3>{producto.nombre}</h3>
              <span className = "badge badge-pill badge-danger ml-2">
                {producto.codigo}
              </span>
            </div>
            <div className = "card-body">
              <p>{producto.fechaven}</p>
              <p>{producto.categoria}</p>
              <p>{producto.precio}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.borrarProducto.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Productos
            <span className = "badge badge-pill badge-info ml-2">
              { this.state.productos.length }
            </span>
          </a>
        </nav>

        <div className = "container">
          <div className = "row mt-4">

          <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
            <IngresarProducto onAddProducto={this.agregarProducto}></IngresarProducto>
          </div>

          <div className="col-md-8">
              <div className="row">
                {productos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
