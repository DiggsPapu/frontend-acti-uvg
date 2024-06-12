import PropTypes from 'prop-types'
import Title from './Title'
import { 
    Button, 
    createTheme, 
    ThemeProvider, 
  } from "@mui/material"

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
export default function StepperCompleted (titleName, buttonName, action = ()=>{}){
    return (
        <>
            <div className={{
                maxWidth: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: '5%',
                paddingBottom: '3%',
            }}>
                <Title content = {titleName} color='#505862'/>
            </div>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" onClick={action}>{buttonName}</Button>  
            </ThemeProvider>
      </>
    )
}
StepperCompleted.propTypes = {
    titleName: PropTypes.string,
    buttonName: PropTypes.string,
    action: PropTypes.func,
}