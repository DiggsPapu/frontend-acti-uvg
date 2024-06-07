import { Button, TextField, createTheme, ThemeProvider } from "@mui/material"

import Title from '../components/Title'

const textFieldTheme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
})
const buttonTheme = createTheme({
  typography: {
    fontFamily: 'RobotoMono',
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

function Login() {
    
    return (
      <div>
      <Title content = "Iniciar Sesión" color='#505862'/>
      <ThemeProvider theme={textFieldTheme}>
        <TextField id="outlined-basic" label="Correo" variant="outlined" required />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" required />
      </ThemeProvider>
      <ThemeProvider theme={buttonTheme}>
        <Button variant="contained" >Ingresar</Button>  
      </ThemeProvider>
        <p style={{fontFamily: "Raleway"}}>
            <a href="">He olvidado mi contraseña</a><br/>
            <a href="">¿No eres miembro? Registrate</a>
        </p>
      </div>
    )
  }

export default Login
