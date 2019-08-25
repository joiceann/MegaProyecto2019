import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  Card, CardBody, CardTitle, CardText, Input, CardFooter, Button
} from "reactstrap"

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  login = () => {
    const { email, password } = this.state

  }

  render = () => {
    return (
      <div className="default-container flex-center">
        <Card>
          <CardBody>
            <CardTitle ><strong>Iniciar sesión</strong></CardTitle>
            <Input onChange={(e) => this.setState({ email: e.target.value })} className="input-create input-space" type="text" placeholder="Correo" />
            <Input onChange={(e) => this.setState({ password: e.target.value })} className="input-create" type="password" placeholder="Contraseña" />
          </CardBody>
          <CardFooter >
            <Button block onClick={() => this.login()}>Registrate</Button>
          </CardFooter>
        </Card>
      </div> 
    )
  }
}

export default HomePage