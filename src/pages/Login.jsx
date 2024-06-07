import { Button, TextField, createTheme, ThemeProvider } from "@mui/material"
import Title from '../components/Title'
import style from './Pages.module.css'

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
      <div className={style.pageStructure}>
      {/* Title div */}
        <div className={style.titleDiv}>
          <Title content = "Iniciar Sesión" color='#505862'/>
        </div>
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
