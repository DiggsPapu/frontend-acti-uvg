import { useState } from "react"
import StepperHeader from './StepperHeader'
import StepperFirst from "./StepperFirst"
import StepperSecond from "./StepperSecond"
import StepperCompleted from "./StepperCompleted"
import styleSign from './stepper.module.css'
const steps = [
    'Afiliación',
    'Datos',
    'Confirmación',
  ]
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
            <div className={styleSign.miniForm}>
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