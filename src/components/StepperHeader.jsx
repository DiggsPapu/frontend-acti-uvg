import { 
    Stepper,
    Step,
    StepLabel, 
  } from "@mui/material"
import PropTypes from 'prop-types'

export default function StepperHeader(steps, activeStep = 0){
    return (
        <div 
        style={{ 
            width: '50%', 
            paddingTop: '2%',
            paddingBottom: '2%',
            marginLeft: 'auto', 
            marginRight: 'auto',
          }}
          >
          <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        </div>
    )
}

StepperHeader.propTypes = {
    steps: PropTypes.array,
    activeStep: PropTypes.number,
}