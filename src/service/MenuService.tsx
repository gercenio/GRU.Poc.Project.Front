//import http from "../http-common";
import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import FlightIcon from '@material-ui/icons/Flight';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';

class MenuService {
    getAll() {
        return mockup;
    }
}

export default new MenuService();

const mockup = [
    {
      name: 'Home',
      icon: <HomeIcon/>,
      url: '/'
    },
    {
      name: 'Companhia',
      icon: <FlightIcon/>,
      url: '/companhias'
    },
    {
      name: 'Usuário',
      icon: <PersonIcon/>,
      url: '/usuarios'
    },
    {
      name: 'Grupo',
      icon: <GroupIcon/>,
      url: '/grupos'
    },
    {
      name: 'Formulário',
      icon: <ListIcon/>,
      url: '/formularios'
    }
  ];
