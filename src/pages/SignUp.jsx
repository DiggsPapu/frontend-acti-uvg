import { useState } from "react"
import { 
  Button, 
  createTheme, 
  ThemeProvider, 
  Stepper,
  Step,
  StepLabel, 
  TextField,
  styled
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import SchoolIcon from '@mui/icons-material/School'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Title from '../components/Title'
import style from './Pages.module.css'
import StepperCompleted from '../components/StepperCompleted';
import StepperHeader from "../components/StepperHeader"
import TextEntry from '../components/TextEntry'
import StepperSignUp from "../components/StepperSignUp"
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
const BackButton = styled(Button)({
  fontFamily: 'RobotoMono',
  color: '#505862',
  textTransform: 'none',
})
const values = [["Apellidos", "Nombres"], ["Correo UVG", "Carnet"], ["Contraseña", "Confirmar contraseña"], ["Fecha de nacimiento", "Telefono"]]
export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [afiliation, setAfiliation] = useState(0)
  const navigate = useNavigate()

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
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
        <StepperSignUp />
    </div>
  );
}

