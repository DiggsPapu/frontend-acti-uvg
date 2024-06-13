import { 
    Button, 
    createTheme, 
    ThemeProvider, 
    TextField,
    styled
  } from "@mui/material"
import { useNavigate } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Title from './Title'
import TextEntry from './TextEntry'

const BackButton = styled(Button)({
    fontFamily: 'RobotoMono',
    color: '#505862',
    textTransform: 'none',
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
const values = [["Apellidos", "Nombres"], ["Correo UVG", "Carnet"], ["Contraseña", "Confirmar contraseña"], ["Fecha de nacimiento", "Telefono"]]

export default function StepperSecond(context, setContext){
    const navigate = useNavigate()
    return (
        <>
        {
            context.afiliation === 0 ?
            (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                  <BackButton 
                      variant="text" 
                      onClick={() => { setContext({activeStep: 0, afiliation: null }) }}
                      startIcon={<KeyboardBackspaceIcon />}
                    >Regresar</BackButton>
                    {/* Title div */}
                    <div className={{
                        maxWidth: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '5%',
                        paddingBottom: '3%',
                    }}>
                      <Title content = "Estudiante" color='#505862'/>
                    </div>
                    <TextEntry values={values}/>
                    <ThemeProvider theme={buttonTheme}>
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
                      <Button variant="contained" onClick={() => {navigate(-1)}}>Continuar</Button>  
                    </ThemeProvider>
                  </div>)
            :
            (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Button 
                    variant="text" 
                    onClick={() => { setContext({activeStep: 0, afiliation: null }) }}
                    startIcon={<KeyboardBackspaceIcon />}
                  >Regresar</Button>
                    {/* Title div */}
                    <div className={{
                        maxWidth: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '5%',
                        paddingBottom: '3%',
                    }}>
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
                    <div className={{
                        maxWidth: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '5%',
                        paddingBottom: '3%',
                    }}>
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