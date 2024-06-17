import PropTypes from 'prop-types'
import Title from './Title'
import { 
    Button, 
    createTheme, 
    ThemeProvider, 
  } from "@mui/material"

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
export default function StepperCompleted ({titleName, buttonName, action = ()=>{}}){
    return (
        <>
            <p>Se ha enviado un correo de confirmación a:</p>
            <p>abc@uvg.edu.gt</p>
            <p>Se requiere de confirmar su cuenta para poder aplicar a los proyectos.<br/>
            Si no encuentra el correo verifique en su bandeja de spam.</p>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" >{buttonName}</Button>  
            </ThemeProvider>
      </>
    )
}
StepperCompleted.propTypes = {
    titleName: PropTypes.string,
    buttonName: PropTypes.string,
    action: PropTypes.func,
}