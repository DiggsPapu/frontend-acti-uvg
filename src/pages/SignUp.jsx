

import * as React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from "react"
import { 
  Button, 
  createTheme, 
  ThemeProvider, 
  Stepper,
  Step,
  StepLabel, 
  TextField
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import SchoolIcon from '@mui/icons-material/School'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Title from '../components/Title'
import style from './Pages.module.css'
import StepperCompleted from '../components/StepperCompleted';

const textFieldTheme = createTheme({
  typography: {
    fontFamily: 'RobotoMono',
    fontSize: 10,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
  palette:{
    primary: {
      main: '#367D39',
    },
  },
})
const steps = [
  'Afiliación',
  'Datos',
  'Confirmación',
]
const buttonTheme = createTheme({
  typography: {
    fontFamily: 'RobotoMono',
    fontSize: '1vw !important',
  },
  palette: {
    primary: {
      main: "#9BBE43",
    },
    secondary: {
      main: "#9BBE43",
    },
  },
})

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [afiliation, setAfiliation] = useState(0)
  const navigate = useNavigate()

  const totalSteps = () => {
    return steps.length
  };

  const completedSteps = () => {
    return Object.keys(completed).length
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ 
        fontFamily: 'RobotoMono', 
        fontSize: '8vw', 
        color:'#505862',
        maxWidth: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        }}
        >
          ActiUVG
        </h1>
        <div 
        style={{ 
            width: '50%', 
            paddingTop: '2%',
            paddingBottom: '2%',
            marginLeft: 'auto', 
            marginRight: 'auto',
          }}
          >
          <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        </div>
        <div className={style.miniForm}>
        {allStepsCompleted() ? (
          <StepperCompleted titleName='Registrate' buttonName='Volver a enviar el correo'/>
        ) : (
          <>
          {
            activeStep===0?
            (<>
              {/* Title div */}
              <div className={style.titleDiv}>
                <Title content = "Registrate" color='#505862'/>
              </div>
              <div className={style.fillDiv}>
                <ThemeProvider theme={textFieldTheme}>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      setActiveStep(activeStep+1)
                      setAfiliation(1)
                      }}
                    startIcon={<SchoolIcon />}
                  >
                    Estudiante
                  </Button>  
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      setActiveStep(activeStep+1)
                      setAfiliation(0)
                      }}
                    startIcon={<CorporateFareIcon />}
                  >Organización</Button>  
                </ThemeProvider>
              </div>
              <div style={{
                width: '40%',
                height: 'auto',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
                <ThemeProvider theme={buttonTheme}>
                  <Button variant="contained" onClick={() => {navigate(-1)}}>Cancelar</Button>  
                </ThemeProvider>
              </div>
              <div style={{
                fontFamily: "Raleway", 
                display: 'flex', 
                flexDirection: 'column', 
                maxWidth: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '10vh',
                justifyContent: 'space-evenly',
                fontSize: '1vw',
                marginTop: '5%', 
                color: '#367D39',
                textDecoration: 'underline', 
                }}
                >
                  <p style={{ cursor: 'pointer',}} onClick={() => {navigate(-1)}}>¿Ya eres miembro? Iniciar Sesión</p>
              </div>
            </>)
            :
            (
              <>
              {
                afiliation ?
                (
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Button 
                    variant="text" 
                    onClick={() => { setActiveStep(activeStep-1) }}
                    startIcon={<KeyboardBackspaceIcon />}
                  >Regresar</Button>
                    {/* Title div */}
                    <div className={style.titleDiv}>
                      <Title content = "Estudiante" color='#505862'/>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto auto'
                    }}>
                    <TextField 
                      id="outlined-basic" 
                      label="Apellidos" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Nombres" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Correo UVG" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Carnet" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Contraseña" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Confirmar contraseña" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Fecha de nacimiento" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Telefono" 
                      required 
                    />
                    </div>
                    <TextField 
                      id="outlined-basic" 
                      label="Facultad" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Carrera" 
                      required 
                    />
                    <ThemeProvider theme={buttonTheme}>
                      <Button variant="contained" onClick={() => {navigate(-1)}}>Continuar</Button>  
                    </ThemeProvider>
                  </div>
                  
                ) :(
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Button 
                    variant="text" 
                    onClick={() => { setActiveStep(activeStep-1) }}
                    startIcon={<KeyboardBackspaceIcon />}
                  >Regresar</Button>
                    {/* Title div */}
                    <div className={style.titleDiv}>
                      <Title content = "Organización" color='#505862'/>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto auto'
                    }}>
                    <TextField 
                      id="outlined-basic" 
                      label="Nombre del contacto" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Nombre de la organización" 
                      required 
                    />
                    </div>
                    <TextField 
                      id="outlined-basic" 
                      label="Dirección" 
                      required 
                    />
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto auto'
                    }}>
                    <TextField 
                      id="outlined-basic" 
                      label="Teléfono" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Correo" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Contraseña" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Confirmar contraseña" 
                      required 
                    />
                    </div>
                    <div className={style.titleDiv}>
                      <p style={{ fontSize: '1.0vw', fontFamily: 'RobotoMono', color:'#505862' }}>Redes sociales (debe colocar al menos uno)</p>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto auto'
                    }}>
                    <TextField 
                      id="outlined-basic" 
                      label="Sitio Web" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Facebook" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="LinkedIn" 
                      required 
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Instagram" 
                      required 
                    />
                    </div>
                    <ThemeProvider theme={buttonTheme}>
                      <Button variant="contained" onClick={() => {navigate(-1)}}>Continuar</Button>  
                    </ThemeProvider>
                  </div>
                )
              }
              </>
            )
          }
          </>
        )}
      </div>
    </div>
  );
}

