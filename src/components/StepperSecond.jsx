import { 
    Button, 
    createTheme, 
    ThemeProvider, 
    TextField,
  } from "@mui/material"
import PropTypes from 'prop-types'
import TextEntry from './TextEntry'

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
const values2 = [["Nombre del contacto","Nombre de la organización" ]]
const values3 = [["Teléfono", "Correo" ],["Contraseña", "Confirmar contraseña" ]]
const values4 = [["Sitio Web", "Facebook" ],["LinkedIn","Instagram" ]]
export default function StepperSecond({afiliation, newStep, setAfiliation}){
    return (
        <div style={{
          paddingRight: '3%',
          paddingLeft: '3%',
          paddingBottom: '20%'
        }}>
        {
            afiliation === 0 ?
            (
            <div style={{display: 'flex', flexDirection: 'column'}}>
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
                <Button 
                  variant="contained" 
                  onClick={() => {newStep(2)}}
                >Continuar</Button>  
              </ThemeProvider>
            </div>)
            :
            (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextEntry values={values2}/>
                    <TextField 
                      id="outlined-basic" 
                      label="Dirección" 
                      required 
                    />
                    <TextEntry values={values3}/>
                    <div className={{
                        maxWidth: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '5%',
                        paddingBottom: '3%',
                    }}>
                      <p style={{ fontSize: '1.0vw', fontFamily: 'RobotoMono', color:'#505862' }}>Redes sociales (debe colocar al menos uno)</p>
                    </div>
                    <TextEntry values={values4}/>
                    <ThemeProvider theme={buttonTheme}>
                      <Button 
                        variant="contained" 
                        onClick={() => {newStep(2)}}
                      >Continuar</Button>  
                    </ThemeProvider>
                  </div>
            )
        }
        </div>
    )
}
StepperSecond.propTypes = {
  afiliation: PropTypes.number,
  newStep: PropTypes.func,
  setAfiliation: PropTypes.func,
}