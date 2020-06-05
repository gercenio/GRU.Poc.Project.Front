import React, { Component } from 'react';
import {
  Typography, Divider, Button, TextField, FormControl
} from '@material-ui/core';
import CompanyService from '../../service/CompanyService';
import { RouteComponentProps } from 'react-router';

interface MyState {
    [key: string]: any
}

class Form extends Component<RouteComponentProps, MyState> {

    constructor(props:any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        let params = props.match.params;
        let company = CompanyService.get(parseInt(params.id));
        this.state = { 
            company : {
                id: company?.id,
                cia: company?.cia,
                sigla: company?.sigla,
                cnpj: company?.cnpj,
                pais: company?.pais,
                gerente: company?.gerente,
                emailGerente1: company?.emailGerente1,
                emailGerente2: company?.emailGerente2,
                telefoneGerente1: company?.telefoneGerente1,
                telefoneGerente2: company?.telefoneGerente2,
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
                <Typography variant="h4">Companhia</Typography>

                <Divider/>

                <form className="class" autoComplete="off" onSubmit={this.handleSubmit}>
                    <FormControl>
                        <TextField required id="cia" label="Nome CIA" value={this.state.company.cia}  onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="sigla" label="Sigla ICAO" value={this.state.company.sigla} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="cnpj" label="CNPJ" value={this.state.company.cnpj} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="pais" label="País" value={this.state.company.pais} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="gerente" label="Gerente" value={this.state.company.gerente} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="emailGerente1" label="E-mail Gerente 1" value={this.state.company.emailGerente1} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField id="emailGerente2" label="E-mail Gerente 2" value={this.state.company.emailGerente2} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField required id="telefoneGerente1" label="Telefone Gerente 1" value={this.state.company.telefoneGerente1} onChange={(e) => { this.handleInputChanges(e) }}/>
                        <TextField id="telefoneGerente2" label="Telefone Gerente 2" value={this.state.company.telefoneGerente2} onChange={(e) => { this.handleInputChanges(e) }}/>
                    
                        <Button type="submit" variant="contained" color="primary" >Enviar</Button>
                    </FormControl>
                </form>
    
            </React.Fragment>
        );
    }
}

export default Form;
