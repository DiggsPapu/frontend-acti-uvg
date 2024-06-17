import StepperSignUp from "../components/StepperSignUp"
export default function SignUp() {
  return (
    <div style={{ width: '100%' }}>
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
        <StepperSignUp />
    </div>
  );
}

