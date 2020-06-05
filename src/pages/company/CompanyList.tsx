import React from 'react';
import {Typography, Divider, Button, TextField  } from '@material-ui/core';
import StickyHeadTable from '../../components/template/StickyTable';
import CompanyService from '../../service/CompanyService';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface CompanyColumn {
    id: 'cia' | 'sigla' | 'cnpj' | 'pais' | 'gerente' | 'telefoneGerente1' | 'telefoneGerente2' | 'emailGerente1' | 'emailGerente2' | 'responsavel1' | 'responsavel2' | 'responsavel3' | 'responsavel4' | 'responsavel5' | 'responsavel6' | 'responsavel7' | 'responsavel8' | 'responsavel9' | 'responsavel10' | 'edit';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    action?: boolean;
    url?: string;
    format?: (value: number) => string;
}

const columns: CompanyColumn[] = [
    { id: 'cia', label: 'Nome CIA', minWidth: 170 },
    { id: 'sigla', label: 'Sigla ICAO', minWidth: 100 },
    { id: 'cnpj', label: 'CNPJ', minWidth: 100 },
    { id: 'pais', label: 'País de Origem', minWidth: 100 },
    { id: 'telefoneGerente1', label: 'Telefone Gerente 1', minWidth: 100 },
    { id: 'telefoneGerente2', label: 'Telefone Gerente 2', minWidth: 100 },
    { id: 'emailGerente1', label: 'E-mail 1', minWidth: 100 },
    { id: 'emailGerente2', label: 'E-mail 2', minWidth: 100 },
    { id: 'edit', label: 'Ação', align: 'center', minWidth: 100, action: true, url: '/companhia/'}
];

interface MyState {
    companies: any[]
}

class List extends React.Component<RouteComponentProps, MyState> {

    constructor(props:any) {
        super(props);
        let companies = CompanyService.getAll();
        this.state = { companies : companies };
    }

    handleSubmit(){
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">Companhias</Typography>
                <Divider/>
                <form className="class" autoComplete="off" onSubmit={this.handleSubmit}>
                    {columns.map((field:any) => {
                        if(!field.action){
                            return (
                                <div>
                                    <TextField id={field.id} label={field.label} />
                                </div>
                            )
                        } else {
                            return (
                                <div></div>
                            )
                        }
                    })}
                    <div dir="rtl">
                        <Link to="/companhia" style={{textDecoration: 'none'}}><Button type="submit" variant="contained" color="secondary">Adicionar</Button></Link>
                        <Button type="submit" variant="contained" color="primary">Pesquisar</Button>
                    </div>
                </form>
                <StickyHeadTable columns={columns} rows={this.state.companies}/>
            </React.Fragment>
        );
    }
}

export default List;