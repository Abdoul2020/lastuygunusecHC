import React  from 'react'
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';


function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput      
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
}

// tc mask part from heer
function TextMaskCustomTC(props) {

    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput      
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['________________']}
        placeholderChar={'\u2000'}
        showMask
      />
    );

}



TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

TextMaskCustomTC.propTypes={
    inputRef: PropTypes.func.isRequired,
}

export default function PersonalInfoForm(props) {

    return (
        <>
            <Container fullWidth>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                    <TextField
                        fullWidth
                        max
                        variant="outlined"
                        size="medium"
                        label="*T.C. Kimlik Numaranız"
                        id="name"
                        name="name"
                        type="number"          
                        inputProps={{maxLength: 11, style: {textTransform: 'capitalize'}}}                                                    
                        onChange={props.formik.handleChange}
                        onBlur={props.formik.handleBlur}
                        value={props.formik.values.name}
                        error={props.formik.touched.name && Boolean(props.formik.errors.name)}
                        helperText={props.formik.touched.name && props.formik.errors.name}         
                        InputLabelProps={{
                            shrink: true,
                        }}

                        
                    />                        
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >                    
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="medium"
                        label="*Doğum Tarihiniz"
                        id="location"
                        name="location"
                        type="text"                        
                        
                        onChange={props.formik.handleChange}
                        onBlur={props.formik.handleBlur}
                        value={props.formik.values.location}                            
                        helperText="(Optional)"
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />                        
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >                    
                    <TextField
                        fullWidth
                        size="medium"
                        variant="outlined"
                        label="Mail Adresiniz"
                        id="email"
                        name="email"
                        type="email"
                        inputProps={{style: {textTransform: 'lowercase'}}}                
                        onChange={props.formik.handleChange}
                        onBlur={props.formik.handleBlur}
                        value={props.formik.values.email}
                        error={props.formik.touched.email && Boolean(props.formik.errors.email)}
                        helperText={props.formik.touched.email && props.formik.errors.email}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />                    
                </Grid>
               
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                    
                    <FormControl  variant="outlined" size={'medium'} fullWidth>
                            <InputLabel htmlFor="phone">*Cep</InputLabel>        
                                <OutlinedInput                                     
                                    
                                    value={props.formik.values.phone}
                                    error={props.formik.touched.phone && Boolean(props.formik.errors.phone)}
                                    helperText={props.formik.touched.phone && props.formik.errors.phone}    
                                    onChange={props.formik.handleChange}
                                    
                                    name="phone"
                                    id="phone"
                                    label="Phone"
                                    size={'medium'}          
                                    style={{marginTop: -1}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputComponent={TextMaskCustom}

                                />
                            <FormHelperText id="my-helper-text" error={props.formik.touched.phone && Boolean(props.formik.errors.phone)}>
                            {props.formik.errors.phone}
                            </FormHelperText>
                        </FormControl>                                            
                    
                </Grid>
        </Grid>
        </Container>            
        </>
    )
}



