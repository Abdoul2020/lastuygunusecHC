import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import CameraIcon from '@material-ui/icons/Camera';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useFormik } from 'formik';
import * as yup from 'yup';


import PersonalInfoForm from './formpart/PersonalInfoForm';
import EventForm from './formpart/EventForm';
import AddImageForm from './formpart/AddImageForm';
import TermsConditionsForm from './formpart/TermsConditionsForm';
import { format, addDays } from 'date-fns'
import { capitalize } from '@material-ui/core';
import $ from "jquery";






const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: '1280px',
    marginLeft: '11vw',
    
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      marginLeft: '1vw',
    },
  },
  paper: {
    marginTop: theme.spacing(3),    
    marginBottom: theme.spacing(3),
    
    
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  
}));

function QontoStepIcon(props) {
  const classes = useStyles();
  const { active, completed } = props;
  const { email, setEmail } = useState('');
  const { isEmailValid, setIsEmailValid } = useState(false);    
  
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,  
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(28, 123, 23) 0%,rgb(28, 123, 23) 50%,rgb(28, 123, 23) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(28, 123, 23) 0%,rgb(28, 123, 23) 50%,rgb(28, 123, 23) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(28, 123, 23) 0%, rgb(28, 123, 23) 50%, rgb(28, 123, 23) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(28, 123, 23) 0%, rgb(28, 123, 23) 50%, rgb(28, 123, 23) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PersonIcon />,    
    2: <EventIcon />,
    3: <CameraIcon />,
    4: <PlaylistAddCheckIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


function getSteps() {
  return ['Sigortalı Bilgileriniz', 'Yenileme Araç Bilgileriniz',  'Doküman/Belge', 'şartlar ve koşullar'];
}





export default function StepperForm() {


  // div changer from here
const [sahisChecked,setsahisChecked]= useState(true);
const [kurumsalChecked, setkurumsalChecked]= useState(false);

  



  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [ hasFiles, setHasFiles ] = useState(false);
  const [ files, setFiles ] = useState([]);

    
//********************************************************************************************************************************* */
//*  Y U P   V A L I D A T I O N    S C H E M A S 
//********************************************************************************************************************************* */
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  

  const personalInfoValidationSchema = yup.object({
    name: yup
      .string('T.C giriniz')
      .min(11, 'Doğru t.c giriniz')
      .required('T.C Gereklidir'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),    
    phone: yup
      .string('Enter your phone number')
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),    
    location: yup
      .string('Not Required')                  
  });

  const eventValidationSchema = yup.object({
    title: yup
      .string('Enter your title number')
      .min(3, 'Title should be of minimum 3 characters')
      .required('Title is required'),
            
  });

  const imageUploadValidationSchema = yup.object().shape({
    hasImagesToUpload: yup
      .string('Enter your title number')      
      .required('Do you have any images'),
    filesCount: yup    
    .number()    
    .when("hasImagesToUpload", {
      is: "Yes",
      then: yup.number().required('Images are required if you answered Yes above').test(val => val < files.length)
    })      
  });

  const termConditionsSchema = yup.object().shape({

    isTermChecked: yup      
      .boolean("Agree to Terms & Conditions")
      .required("Please Agree to Terms & Conditions")
      .test(val => val !== false)

  });


  
//********************************************************************************************************************************* */
//*  F O R M I K
//********************************************************************************************************************************* */

  const formikPersonalInfo = useFormik({
    initialValues: {
      name: '',        
      email: '',
      phone: '',
      location: '',
    },
    validationSchema: personalInfoValidationSchema,    
    onSubmit: values => {     
      handleNext();  
    },
  });

  const formikEvents = useFormik({
    initialValues: {
      title: '',
      description: '',
      startDate: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      endDate: format(addDays(new Date(), 31), 'yyyy-MM-dd')      
    },    
    validationSchema: eventValidationSchema,
    onSubmit: values => {
      handleNext();  
    },
  });
  
  const formikImageUpload = useFormik({    
    initialValues: {
      hasImagesToUpload: '',
      filesCount: 0
    },    
    validationSchema: imageUploadValidationSchema,
    onSubmit: values => {      
      handleNext();  
    },
  });

  const formikTermsConditions = useFormik({    
    initialValues: {
      isTermChecked: false,      
    },    
    validationSchema: termConditionsSchema,
    onSubmit: values => {                  
      handleFormSubmit();  
    },
  });

//********************************************************************************************************************************* */
//*  H A N D L E   S T E P P E R
//********************************************************************************************************************************* */

  const handleNext = () => {    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
        case 0:
        return (<>
                    <PersonalInfoForm  formik={formikPersonalInfo} />
                </>);
        case 1:
          return (<>
                    <EventForm formik={formikEvents} />
                </>);
        case 2:        
          return (<>
                    <AddImageForm handleDropzoneChange={handleDropzoneChange} 
                                  formik={formikImageUpload}
                                  files={files}
                                  handleIsFileChange={handleIsFileChange} 
                              />
                </>);
        case 3:        
          return (<>
                  <TermsConditionsForm                                                              
                                formik={formikTermsConditions}
                            />
              </>);                
        default:
        return 'Unknown step';
    }
  }

  const handleSubmit = () => {        
    switch (activeStep) {
      case 0: formikPersonalInfo.handleSubmit(); break;
      case 1: formikEvents.handleSubmit(); break;      
      case 2: formikImageUpload.handleSubmit(); break;      
      case 3: formikTermsConditions.handleSubmit(); break;      
      
    }                        
  };
  
  const handleFormSubmit = () => {
    var data = {
      Name: capitalize(formikPersonalInfo.values.name),        
      Email: formikPersonalInfo.values.email.toLowerCase(),        
      Phone: formikPersonalInfo.values.phone,        
      Location: formikPersonalInfo.values.location,        
      EventTitle: formikEvents.values.title,        
      EventDescription: formikEvents.values.description,              
      StartDate: formikEvents.values.startDate,        
      EndDate: formikEvents.values.endDate,        
      Files: files      
    }
    console.log('handleFormSubmit ', data);
    alert(JSON.stringify(data, null, 2));
    
  }

  const handleDropzoneChange = (files) => {       
    setFiles(files);       
  }

  const handleIsFileChange = (val) => {    
    setHasFiles(val);    
  }

  return (

    <React.Fragment>
      <Grid container spacing={3}>

       

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  className="tekliAlForm">
        <Paper className={classes.paper}>
          <form noValidate autoComplete="off">

            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Grid container>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <ul class="parentClass">
	<li>
		<label className='labelName'>
			<input type="radio" value="" name="anything" class="radioCls" id="yes" checked={sahisChecked}  onClick={()=>{setsahisChecked(true); setkurumsalChecked(false)}}/> şahıs
		</label>
		<label className='labelName'>
			<input type="radio" value="" name="anything" class="radioCls" id="no" checked={kurumsalChecked} onClick={()=>{setsahisChecked(false); setkurumsalChecked(true)}}/> Şirket

		</label>
	</li>
</ul>



              </Grid>
              
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>


{
  sahisChecked && (

    <div >
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>

                    All steps completed - you&apos;re finished

                  </Typography>

                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  
                  {getStepContent(activeStep)}
                                      
                  <React.Fragment>
                    <div className={classes.buttons}>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                      Geri
                    </Button>
                    {activeStep === steps.length - 1 ?
                      <Button
                            variant="contained"
                            // disabled={!isStepValidated(activeStep) }
                            color="primary"
                            onClick={handleSubmit}
                            className={classes.button}

                            style={{
                              background:"#1c7b17",
                              color:"#FFF"
                            }}
                        >
                          Bittir
                      </Button>
                      :
                      <Button
                          variant="contained"                          
                          color="primary"                          
                          onClick={handleSubmit}
                          className={classes.button}

                          style={{
                            background:"#1c7b17",
                            color:"#FFF"
                          }}
                      >
                        Devam
                     </Button>
                    }
            
                  </div>
                  </React.Fragment>
                </div>
              )}

            </div>

  )
}
              
                

             

          {
             kurumsalChecked &&(
              <div >
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>

                    All steps completed - you&apos;re finished

                  </Typography>

                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  
                  {getStepContent(activeStep)}
                                      
                  <React.Fragment>
                    <div className={classes.buttons}>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                      Geri
                    </Button>
                    {activeStep === steps.length - 1 ?
                      <Button
                            variant="contained"
                            // disabled={!isStepValidated(activeStep) }
                            color="primary"
                            onClick={handleSubmit}
                            className={classes.button}
                        >
                          Bittir
                      </Button>
                      :
                      <Button
                          variant="contained"                          
                          color="primary"                          
                          onClick={handleSubmit}
                          className={classes.button}
                      >
                        Devam
                     </Button>
                    }
            
                  </div>
                  </React.Fragment>
                </div>
              )}
            </div>
             )
          }

              </Grid>

            </Grid>

           



          </form>
          </Paper>
        </Grid>


          


      </Grid>          
    </React.Fragment>
  );
}
