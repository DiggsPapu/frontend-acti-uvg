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
import StepperHeader from './StepperHeader'
import StepperFirst from "./StepperFirst"
import StepperSecond from "./StepperSecond"
import StepperCompleted from "./StepperCompleted"
const steps = [
    'Afiliación',
    'Datos',
    'Confirmación',
  ]
const BackButton = styled(Button)({
    fontFamily: 'RobotoMono',
    color: '#505862',
    textTransform: 'none',
  })
export default function StepperSignUp(){
    const [context, setContext] = useState({activeStep: 0, afiliation: 0})
    return (
        <>
            <StepperHeader steps={steps} activeStep={context.activeStep} />
            <div className={{
                backgroundColor: 'white',
                width: '35vw',
                height: '70%',
                borderRadius: '2.5%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '80px',
                boxShadow: '0.01vw 0.01vw',
            }}>
            {
                context.activeStep === 0 ?
                (<StepperFirst setContext={setContext}/>)
                :
                (
                    <>
                        {
                            context.activeStep === 1 ? 
                            (<StepperSecond context={context} setContext={setContext}/>)
                            :
                            (<StepperCompleted titleName="Confirma" buttonName="Volver a enviar el correo"/>)
                        }
                    </>
                )
            }
            </div>
        </>
    )
}