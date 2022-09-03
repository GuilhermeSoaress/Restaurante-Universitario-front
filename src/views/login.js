import React from "react";
import Card from '../componentes/card'
import FormGroup from "../componentes/form-group";
import {withRouter} from 'react-router-dom'

class Login extends React.Component{

    state = {
        email : '',
        senha : ''
    }
    entrar = () => {
        console.log('Email ', this.state.email) 
        console.log('Senha ', this.state.senha)    
    }
    prepararCadastrar = () =>{
        this.props.history.push('/cadastro-usuario')
    }

    render(){
        return(
            
                <div className="row">
                    <div className="col-md-6" style={{position :'relative',left: '300px'}}></div>
                    <div className="bs-docs-section">
                       <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-componet">
                                        <fieldset>
                                            <FormGroup label ="Email *" htmlFor ="exampleImputEmail">
                                                <input  value={this.state.email}
                                                        onChange = {e => this.setState({email: e.target.value})}
                                                        type="email" 
                                                        className="form-control" 
                                                        id="exampleInputEmail1" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Digite o Email"></input>
                                            </FormGroup>
                                            <br></br>
                                            <FormGroup label =" Senha *" htmlFor ="exampleInputPassword1">
                                                <input value={this.state.senha}
                                                        onChange = {e => this.setState({senha: e.target.value})}
                                                         type="password" 
                                                        className="form-control" 
                                                        id="exampleInputPassword1" 
                                                        placeholder="Password"></input>
                                            </FormGroup>
                                            <br></br>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            
                                            <button onClick={this.prepararCadastrar}className="btn btn-danger">Cadastrar</button>

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>  
                    </div>
                </div>
            
        )
    }
}

export default withRouter(Login)