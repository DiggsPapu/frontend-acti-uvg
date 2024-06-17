import { 
    Button, 
    createTheme, 
    ThemeProvider,
  } from "@mui/material"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import SchoolIcon from '@mui/icons-material/School'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import Title from './Title'

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
export default function StepperFirst({ setAfiliation, setStep }){
    const navigate = useNavigate()
    return (
        <>
      <div style={{
        margintop: '10%',
        width: '70%',
        height: '25%',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}>
        <ThemeProvider theme={textFieldTheme}>
          <Button 
            variant="outlined" 
            onClick={()=>{
              setAfiliation(0)
              setStep(1)}}
            startIcon={<SchoolIcon />}
          >
            Estudiante
          </Button>  
          <Button 
            variant="outlined" 
            onClick={()=>{
              setAfiliation(1)
              setStep(1)
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
    </>
    )
}

StepperFirst.propTypes = {
    setAfiliation: PropTypes.func,
    setStep: PropTypes.func,
}