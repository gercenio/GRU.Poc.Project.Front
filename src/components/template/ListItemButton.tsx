import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default function(props:any) {
    return (
        <ListItem button key={props.name}>
            <ListItemIcon style={{color : '#BFD730'}}>{props.icon}</ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem>
    );
}