import { TextField } from "@mui/material"
import PropTypes from 'prop-types'

export default function TextEntry({values}){
    return (
        <>
            {
                values.map((text, index)=>
                (
                    <div style = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '5%'
            }}
            key={index}>
              <div style={{
                width: '45%'
              }}>
                <TextField 
                id="outlined-basic" 
                label={text[0]}
                required 
                />
              </div>
              <div style={{
                width: '45%'
              }}>
              <TextField 
                id="outlined-basic" 
                label={text[1]}
                required 
              />
              </div>
            </div>
                )
                )
            }
        </>
    )
}


TextEntry.propTypes = {
    values: PropTypes.array,
}