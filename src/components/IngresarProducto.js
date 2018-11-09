import React, {Component} from 'react';

class IngresarProducto extends Component {

  constructor (){
    super();
    this.state = {

      codigo: '',
      nombre: '',
      fechaVen: '',
      categoria: '',
      precio: '',
    };
    this.handleInput = this.handleInput.bind(this);    //actualiza los aributos
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){                        // funcion evento
    const {value, name} = e.target
    this.setState({                     // cambia dato establecido en el estad0
      [name]: value
    })
    console.log(this.state);
  }

  handleSubmit(e){

    alert('Ingresando Datos...');
    e.preventDefault();
    this.props.onAddProducto(this.state);
  }

  render (){
    return (
      <div className = "card">
        <form className = "card-body" onSubmit = {this.handleSubmit}>
          <div className = "form-group">
            <input
              type = "text"
              name = "codigo"
              className = "form-control"
              placeholder = "codigo"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "nombre"
              className = "form-control"
              placeholder = "nombre"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "fecha vencimiento"
              className = "form-control"
              placeholder = "fechaven"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "categoria"
              className = "form-control"
              placeholder = "categoria"
              onChange = {this.handleInput}
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "precio"
              className = "form-control"
              placeholder = "precio"
              onChange = {this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    )
  }
}

export default IngresarProducto;
