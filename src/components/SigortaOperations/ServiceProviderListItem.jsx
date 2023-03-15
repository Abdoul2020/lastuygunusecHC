import { ListItem, ListItemIcon, Avatar, ListItemText } from '@mui/material'
import React from 'react'

const ServiceProviderListItem = (props) => {
    return (
        <ListItem disablePadding>
            <ListItemIcon style={{color: "#424242"}}>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={<div><b style={{ width: 170, display: 'inline-block' }}>{props.title}</b><span>
                
                {props.text}
            
            </span></div>} />
            
        </ListItem >
    )
}

export default ServiceProviderListItem