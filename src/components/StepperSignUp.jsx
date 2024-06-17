import { useState } from "react"
import {Button,styled} from "@mui/material"
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
    const [activeStep, setActiveStep] = useState(0)
    const [afiliation, setAfiliation] = useState(null)
    const newAfiliation = (afil) => {
        setAfiliation(afil)
    }
    const newStep = (step) => {
        setActiveStep(step)
    }
    return (
        <>
            <StepperHeader steps={steps} activeStep={activeStep} />
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
                activeStep === 0 && afiliation ===null ?
                (<StepperFirst 
                    setAfiliation={newAfiliation}
                    setStep={newStep}
                />)
                :
                (
                    <>
                        {
                            activeStep === 1 ? 
                            (<StepperSecond 
                                afiliation={afiliation} 
                                newStep={newStep}
                                setAfiliation={newAfiliation}
                            />)
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