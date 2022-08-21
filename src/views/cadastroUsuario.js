import React from "react";
import Card from "../componentes/card";
import FormGroup from "../componentes/form-group";
import { withRouter } from "react-router-dom";
import NavBar from "../componentes/navbar";
import UsuarioService from "../app/service/usuarioService";
import {mensagemErro, mensagemSucesso} from "../componentes/toastr";


class CadastroUsuario extends React.Component{
    state = {
        nome: '',
        email : '',
        matricula: '',
        senha: '',
        senhaRepeticao : ''
    }
    constructor() {
        super();
        this.service = new UsuarioService();
    }
    cadastrar = () => {
        const usuario = {
            nome : this.state.nome,
            email: this.state.email,
            matricula: this.state.matricula,
            senha: this.state.senha
        }
        this.service.salvar(usuario).then(response => {
            mensagemSucesso('Usuario cadastrado com sucesso!')
            this.props.history.push('/login')
        }).catch(error => {
            mensagemErro(error.response.data);
        })
    }
    cancelar = () =>{
        this.props.history.push('/login')
    }

    render(){
           
        return(
           <>
               <NavBar></NavBar>
            <Card title ="Cadatro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-componet">
                            <FormGroup label ="Nome * " htmlFor="inputNome">
                                <input  type="text" 
                                        className="form-control"
                                        id="inputNome" 
                                        name="nome" 
                                        placeholder="Seu Nome"
                                        onChange={e => this.setState({nome: e.target.value})}></input>
                            </FormGroup>
                            <br></br>
                            <FormGroup label ="Matricula * " htmlFor="inputMatricula">
                                <input  type="email" 
                                        className="form-control"
                                        id="inputMatricula" 
                                        name="matricula" 
                                        placeholder="Sua Matricula"
                                        onChange={e => this.setState({matricula: e.target.value})}></input>
                            </FormGroup>
                            <br></br>
                            <FormGroup label ="Email * " htmlFor="inputEmail">
                                <input  type="text" 
                                        className="form-control"
                                        id="inputEmail" 
                                        name="Email" 
                                        placeholder="E-mail"
                                        onChange={e => this.setState({email: e.target.value})}></input>
                            </FormGroup>
                            <br></br>
                            <FormGroup label ="Senha * " htmlFor="inputSenha">
                                <input  type="password" 
                                        className="form-control"
                                        id="inputSenha" 
                                        name="senha" 
                                        placeholder="Senha"
                                        onChange={e => this.setState({senha: e.target.value})}></input>
                            </FormGroup>
                            <br></br>
                            <FormGroup label ="Repita a Senha * " htmlFor="inputRepetirSenha">
                                <input  type="password" 
                                        className="form-control"
                                        id="inputRepetirSenha" 
                                        name="repetirSenha" 
                                        placeholder="Senha"
                                        onChange={e => this.setState({senhaRepeticao: e.target.value})}></input>
                            </FormGroup>
                            <br></br>
                            
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                            
                            <button  onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                    
                    </div>
                </div>
            </div>
            </Card>

           </>
        )
        
    }
        
}

export default withRouter(CadastroUsuario)
