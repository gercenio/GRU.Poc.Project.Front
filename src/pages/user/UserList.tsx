import React from 'react';
import {
  Typography, Divider, Button, TextField 
} from '@material-ui/core';
import StickyHeadTable from '../../components/template/StickyTable';
import UserService from '../../service/UserService';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface UserColumn {
    id: 'rpe' | 'telefone1' | 'telefone2' | 'email1' | 'email2' | 'cia' | 'sigla' | 'edit';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    action?: boolean;
    url?: string;
    format?: (value: number) => string;
}

const columns: UserColumn[] = [
    { id: 'rpe', label: 'RPE', minWidth: 170 },
    { id: 'telefone1', label: 'Telefone 1', minWidth: 100 },
    { id: 'telefone2', label: 'Telefone 2', minWidth: 100 },
    { id: 'email1', label: 'E-mail 1', minWidth: 100 },
    { id: 'email2', label: 'E-mail 2', minWidth: 100 },
    { id: 'cia', label: 'Companhia', minWidth: 100 },
    { id: 'sigla', label: 'Sigla', minWidth: 100 },
    { id: 'edit', label: 'Ação', align: 'center', minWidth: 100, action: true, url: '/usuario/'}
];

interface MyState {
    users: any[]
}

class List extends React.Component<RouteComponentProps, MyState> {

    constructor(props:any) {
        super(props);
        let users = UserService.getAll();
        this.state = { users : users };
    }

    handleSubmit(){
        alert('Submit');
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">Usuários</Typography>

                <Divider/>

                <form className="class" autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField id="rpe" label="RPE" />
                    </div>
                    <div>
                        <TextField id="email" label="E-mail"/>
                    </div>
                    <div>
                        <TextField id="phone" label="Telefone"/>
                    </div>
                    <div>
                        <TextField id="airline" label="CIA Aérea" />
                    </div>
                    <div>
                        <TextField id="initials" label="Sigla ICIA" />
                    </div>

                    <div dir="rtl">
                        <Link to="/usuario" style={{textDecoration: 'none'}}><Button type="submit" variant="contained" color="secondary">Adicionar</Button></Link>
                        <Button type="submit" variant="contained" color="primary" >Pesquisar</Button>
                    </div>
                </form>

                <StickyHeadTable columns={columns} rows={this.state.users}/>
    
            </React.Fragment>
        );
    }
}

export default List;