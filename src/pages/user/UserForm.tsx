import React, { Component } from 'react';
import {
  Typography, Divider, Button, TextField, FormControl
} from '@material-ui/core';
import UserService from '../../service/UserService';
import { RouteComponentProps } from 'react-router';

interface MyState {
    [key: string]: any
}

class Form extends Component<RouteComponentProps, MyState> {

    constructor(props:any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        let params = props.match.params;
        let user = UserService.get(parseInt(params.id));
        this.state = {
            user : {
                id: user?.id,
                email1: user?.email1,
                email2: user?.email2,
                telefone1: user?.telefone1,
                telefone2: user?.telefone2,
                cia: user?.cia,
                sigla: user?.sigla
            }
        };
    }

    handleSubmit(e:React.FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        console.log(this.state);
    }

    private handleInputChanges = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">Usuário</Typography>

                <Divider/>

                <form className="class" autoComplete="off" onSubmit={this.handleSubmit}>
                    <FormControl>
                        <TextField required id="rpe" label="Resposável RPE" value={this.state.user.rpe} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="email1" label="E-mail Responsável 1" value={this.state.user.email1} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField id="email2" label="E-mail Responsável 2" value={this.state.user.email2} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="telefone1" label="Telefone 1" value={this.state.user.telefone1} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField id="telefone2" label="Telefone 2" value={this.state.user.telefone2} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="cia" label="Nome CIA Aérea" value={this.state.user.cia} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="sigla" label="Sigla ICIA" value={this.state.user.sigla} onChange={(e) => { this.handleInputChanges(e) }}/>

                        <Button type="submit" variant="contained" color="primary" >Enviar</Button>
                    </FormControl>
                </form>
    
            </React.Fragment>
        );
    }
}

export default Form;