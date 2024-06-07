import { Button, TextField, createTheme, ThemeProvider } from "@mui/material"
import Title from '../components/Title'
import style from './Pages.module.css'

const textFieldTheme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 10,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
})
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

function Login() {
    
    return (
      <div className={style.pageStructure}>
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
        {/* mini form */}
        <div className={style.miniForm}>
          {/* Title div */}
          <div className={style.titleDiv}>
            <Title content = "Iniciar Sesión" color='#505862'/>
          </div>
          <div className={style.fillDiv}>
            <ThemeProvider theme={textFieldTheme}>
              <TextField 
                id="outlined-basic" 
                label="Correo" variant="outlined" 
                required   
                // error
                // helperText="Mensaje de error"
              />
              <TextField 
                id="outlined-basic" 
                label="Contraseña" 
                required 
                // error
                // helperText="Mensaje de error"  
              />
            </ThemeProvider>
          </div>
          <div style={{
            width: '40%',
            height: '25%',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" >Ingresar</Button>  
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
            fontSize: '1vw'
            }}>
              <a href="">He olvidado mi contraseña</a>
              <a href="">¿No eres miembro? Registrate</a>
          </div>
        </div>
      </div>
    )
  }

export default Login
