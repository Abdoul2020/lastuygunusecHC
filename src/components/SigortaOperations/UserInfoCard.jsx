import { Box, Backdrop, Fade, List, Modal, Typography } from '@mui/material'
import React from 'react'
import ServiceProviderListItem from './ServiceProviderListItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const UserInfoCard = (props) => {

  console.log("bunlarNEE", props)

  return (
      <List style={{ marginTop: 10, marginBottom: 10 }}>
        <ServiceProviderListItem icon={<AccountCircleOutlinedIcon />} title="Ad Soyad" text={props.user.name} />
        <ServiceProviderListItem icon={<LocalPhoneOutlinedIcon />} title="Telefon" text={props.user.phone} />
        <ServiceProviderListItem icon={<AlternateEmailOutlinedIcon />} title="E-Posta" text={props.user.email}/>
        <ServiceProviderListItem icon={<SearchIcon />} title="Vergi Numarası" text={props.user.vergiNo} />
        <ServiceProviderListItem icon={<BadgeOutlinedIcon />} title="T.C. Kimlik No" text={props.user.tc} />
      </List>
  )
}


export default UserInfoCard