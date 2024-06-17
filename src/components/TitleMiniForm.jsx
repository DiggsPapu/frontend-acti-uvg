import Title from './Title'
import BackButton from './BackButton'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import PropTypes from 'prop-types'

export default function TitleMiniForm({ activeStep, afiliation, newStep, setAfiliation }){
    return (
        <div>
          {
            activeStep === 0 && activeStep<1 ?
            (
                <div style={{
                    maxWidth: 'fit-content',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingTop: '5%',
                    paddingBottom: '3%',
                }}>
                    <Title content = "Registrate" color='#505862'/>
                </div>
            ):
            (
                <>
                    { activeStep === 1 && activeStep<2 && activeStep>0 ? 
                        (
                            <>
                                <BackButton variant="text" 
                                onClick={() => {
                                    newStep(0)
                                    setAfiliation(null)
                                    }} 
                                startIcon={<KeyboardBackspaceIcon />}>Regresar</BackButton>
                                <div style={{
                                    maxWidth: 'fit-content',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    paddingTop: '5%',
                                    paddingBottom: '3%',
                                }}>
                                    <Title content = {afiliation===1?"Organización":"Estudiante"} color='#505862'/>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <BackButton variant="text" 
                                    onClick={() => {
                                        newStep(1)
                                        setAfiliation(null)
                                        }} 
                                    startIcon={<KeyboardBackspaceIcon />}>Regresar</BackButton>
                                <div style={{
                                    maxWidth: 'fit-content',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    paddingTop: '5%',
                                    paddingBottom: '3%',
                                }}>
                                    <Title content = "Confirma" color='#505862'/>
                                </div>
                            </>
                        )
                    }
                </>
            )            
          }
        </div>
    )
}
TitleMiniForm.propTypes = {
    activeStep: PropTypes.number,
    afiliation: PropTypes.number,
    newStep: PropTypes.func,
    setAfiliation: PropTypes.func,
}