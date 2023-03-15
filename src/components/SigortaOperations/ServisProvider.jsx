import React, { useState } from 'react'
import {
    Box, FormControl, InputLabel, Select, MenuItem, Grid, Button, CircularProgress, InputAdornment,
    OutlinedInput, List, Stepper, Step, StepLabel, Typography, StepContent, Paper, TextField, Skeleton
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import DescriptionIcon from '@mui/icons-material/Description';
import SyncIcon from '@mui/icons-material/Sync';
import ServiceProviderListItem from './ServiceProviderListItem';
import { getServiceProviderAsync, postServiceProviderAsync, putServiceProviderAsync } from '../../services/redux/servicepSlice';
import { useDispatch, useSelector } from 'react-redux';
import { resetOffer, setEditOffer } from '../../services/redux/servicepSlice'
import { getUserInfoNoIdAsync, postUserInfoAsync } from '../../services/redux/userInfoSlice';
import CustomPaginationActionsTable from './CustomPaginationTable';
import UserInfoCard from './UserInfoCard';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

const ServiceProvider = () => {
    const [type, setType] = React.useState('');
    const [offerCost, setOfferCost] = useState(null);
    const [activeStep, setActiveStep] = React.useState(0);

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { statusErr, statusCode, editOffer } = useSelector(state => state.servicepSlice);
    const { user, statusUser } = useSelector(state => state.userInfo);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleOfferClick = async () => {
        dispatch(postServiceProviderAsync({ service_codename: type })).then((res) => {
            if (res.payload.data.status == 200)
                dispatch(postUserInfoAsync({ id: res.payload.data.body.data.user_uid }));
        });
    }

    const getAllOffersHistory = async () => {
        dispatch(getServiceProviderAsync());
    }
    const handleOfferSend = async () => {
        if (editOffer.cost == "" || editOffer.cost != offerCost && offerCost != null)
            dispatch(putServiceProviderAsync({ id: editOffer.id, title: "cost", data: offerCost })).then(() => {
                getAllOffersHistory();
            });
        handleReset();
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        dispatch(setEditOffer(""));
        setActiveStep(0);
        dispatch(resetOffer());
        getOffers();
        setOfferCost(null);
    };

    const getOffers = async () => {
        dispatch(getServiceProviderAsync());
    }

    const steps = [
        {
            label: 'Fiyat Teklifi Gir',
            description:
                <List style={{ marginTop: 10, marginBottom: 10 }}>
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Sigorta Türü" text={editOffer.service_name} />
                    <ServiceProviderListItem icon={<SyncIcon />} title="Durum" text={editOffer.status} />
                    <ServiceProviderListItem icon={<AddIcon />} title="Ek Bilgi" text={editOffer.additional_info} />
                    <TextField id="outlined-basic" size="small" style={{ margin: "auto", marginTop: 15 }} label="Fiyat" color="success"
                        value={offerCost == null ? (editOffer.cost != "" ? editOffer.cost : offerCost) : offerCost}
                        onChange={(e) => setOfferCost(e.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end" >₺</InputAdornment>
                        }} variant="outlined" />
                </List >
        },
        {
            label: 'Formu Yükle',
            description:
                <List style={{ marginTop: 10, marginBottom: 10 }}>
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Sigorta Türü" text={editOffer.service_name} />
                    <ServiceProviderListItem icon={<SyncIcon />} title="Durum" text={editOffer.status} />
                    <ServiceProviderListItem icon={<AddIcon />} title="Ek Bilgi" text={editOffer.additional_info} />
                    <ServiceProviderListItem icon={<CurrencyLiraIcon />} title="Teklif" text={offerCost != null ? offerCost + "₺" : editOffer.cost + "₺"} />
                    <Button variant="outlined" color="success" style={{ marginTop: 10 }}>Formu Yükle</Button>
                </List >
        },
        {
            label: 'Fatura Yükle',
            description:
                <List style={{ marginTop: 10, marginBottom: 10 }}>
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Sigorta Türü" text={editOffer.service_name} />
                    <ServiceProviderListItem icon={<SyncIcon />} title="Durum" text={editOffer.status} />
                    <ServiceProviderListItem icon={<AddIcon />} title="Ek Bilgi" text={editOffer.additional_info} />
                    <ServiceProviderListItem icon={<CurrencyLiraIcon />} title="Teklif" text={offerCost != null ? offerCost + "₺" : editOffer.cost + "₺"} />
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Fatura Linki" text={editOffer.form_url} />
                    <Button variant="outlined" color="success" style={{ marginTop: 10 }}>Faturayı Yükle</Button>
                </List >
        }
    ];

    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('idToken');
        if (token != null) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now())
                navigate("/page/404");
            else {
                dispatch(getUserInfoNoIdAsync()).then((res) => {
                    if (res.payload.data.body.data.role != "servicep")
                        navigate("/page/404");
                });

            }
        } else
            navigate("/page/404");
            
    }, []);

    return (
        <Grid container direction="column" sx={{ minHeight: '89vh' }}>
            <Box sx={{ flexGrow: 1 }}>
                <div style={{ width: '100%', textAlign: 'center', marginTop:"100px" }}>
                    <FormControl style={{ width: 260, marginTop: 20, marginBottom: 10, textAlign: 'left' }}>
                        <InputLabel color="success" id="demo-simple-select-label">Sigorta Türü</InputLabel>
                        <Select color="success"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Sigorta Türü"
                            onChange={handleChange}>
                            <MenuItem value="all">Tümü</MenuItem>
                            <MenuItem value="car_general">Kasko</MenuItem>
                            <MenuItem value="car_traffic">Trafik Sigortası</MenuItem>
                            <MenuItem value="private_health">Özel Sağlık Sigortası</MenuItem>
                            <MenuItem value="supplementary_health">Tamamlayıcı Sağlık Sigortası</MenuItem>
                            <MenuItem value="compulsory_earthquake">DASK</MenuItem>
                            <MenuItem value="general_home">Konut Sigortası</MenuItem>
                            <MenuItem value="home_security">Evim Güvende Sigortası</MenuItem>
                            <MenuItem value="mobile_phone">Cep Telefonu Sigortası</MenuItem>
                        </Select>
                    </FormControl><br />
                    <Button variant="outlined" disabled={statusErr === "loading"} onClick={handleOfferClick} loadingPosition="end" color="success" size="large" style={{ width: 260 }} endIcon={statusErr !== "loading" ? <SendIcon /> : <CircularProgress style={{ width: 20, height: 20 }} color="inherit" />}>
                        Sigorta Talebi Getir
                    </Button>
                </div>
                {editOffer != "" ?
                    <Box sx={{ maxWidth: 800, margin: 'auto', marginTop: 5, borderRadius: 3, padding: 5, boxShadow: 3, background: "rgb(240 238 238)" }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label} sx={{
                                    '& .MuiStepLabel-root .Mui-completed': {
                                        color: 'green',
                                    },
                                    '& .MuiStepLabel-root .Mui-active': {
                                        color: '#F29339',
                                    },
                                }}>
                                    <StepLabel
                                        optional={
                                            index === 2 ? (
                                                <Typography variant="caption">Son Adım</Typography>
                                            ) : null
                                        }>
                                        {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    onClick={index === steps.length - 1 ? handleOfferSend : handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    {index === steps.length - 1 ? 'Bitir' : 'İleri'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    color="error"
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}>
                                                    Geri
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        <div style={{ textAlign: 'right' }}>
                            <Button color="error" variant="outlined" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>İptal</Button>
                        </div>
                    </Box>
                    : (statusCode == 200 ? (statusUser === "success" ?
                        <Box sx={{ maxWidth: 800, margin: 'auto', marginTop: 10, borderRadius: 3, padding: 5, boxShadow: 3, background: "rgb(240 238 238)" }}>
                            <h3 style={{ textAlign: 'center', fontWeight: 500 }}>Gönderen Kişinin Bilgileri</h3>
                            <hr style={{ width: 300, textAlign: 'center', margin: 'auto' }} />
                            <UserInfoCard user={user} />
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} color="success">
                                Tamam
                            </Button>
                        </Box> :
                        <Box sx={{ width: "96%", margin: 'auto' }}>
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={false} />
                        </Box>)
                        : <CustomPaginationActionsTable />)
                }
            </Box>
        </Grid >
    )
}
export default ServiceProvider