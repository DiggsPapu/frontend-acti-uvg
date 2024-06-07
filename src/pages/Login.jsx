import { Button, TextField } from "@mui/material"


function Login() {
    
    return (
      <>
        <h1>Iniciar Sesión</h1>  
        <TextField id="outlined-basic" label="Correo" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <Button>Ingresar</Button>  
        <p>
            <a>He olvidado mi contraseña</a>
            <a>¿No eres miembro? Registrate</a>
        </p>
      </>
    )
  }

export default Login
