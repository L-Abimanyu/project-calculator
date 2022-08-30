import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



 export default function Calculator(){
    const [val , setVal] = useState("");


    const clear = () =>{
        try {
            
            setVal(val.slice (0, -1))

        }
        catch (error) {
            setVal("")

        }
    }
   
    const calculate = () =>
    {

        try {
            
            setVal(eval(val));

        }
        catch (error) {

        }

    }
   
    return(
        <Grid >
        <Typography variant="h4" gutterBottom>
        CALCULATOR
      </Typography>
        <table >
            <tr>
            <td colSpan="4">
              <TextField
                type="text"
                id="standard-full-width"
                fullWidth
                value={val}
                margin="normal"
                style={{ fontSize: "50px" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="contained" color="primary" onClick={()=> clear()}  >AC </Button>
            </td>
            <td>
              <Button
                type="submit"variant="contained"color="primary" value="0"  onClick={(e)=>setVal(val + e.target.value)} >0</Button>
            </td>
            <td>
              <Button
                variant="contained" color="primary" value="/" onClick={(e)=>setVal(val + e.target.value)} > /</Button>
               </td>

            <td>
              <Button variant="contained" color="primary" value="*"  onClick={(e)=>setVal(val + e.target.value)}>*</Button>
            </td>
          </tr>
          <tr>
            <td>
          <Button  type="submit" variant="contained" color="primary" value="7" onClick={(e)=>setVal(val + e.target.value)} >7</Button>
            </td>
            <td>
           <Button variant="contained" color="primary" value="8"  onClick={(e)=>setVal(val + e.target.value)}>8</Button>
            </td>
            <td>
      <Button variant="contained"  color="primary"  value="9" onClick={(e)=>setVal(val + e.target.value)} >9</Button>
            </td>
            <td>
     <Button   variant="contained" color="primary" value="-" onClick={(e)=>setVal(val + e.target.value)} >-</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="contained" color="primary" value="4" onClick={(e)=>setVal(val + e.target.value)} >4</Button>
            </td>
            <td>
          <Button variant="contained" color="primary" value="5" onClick={(e)=>setVal(val + e.target.value)} >5</Button>
            </td>
            <td>
          <Button variant="contained" color="primary" value="6" onClick={(e)=>setVal(val + e.target.value)} >6</Button>
            </td>
            <td>
          <Button variant="contained" color="primary" value="+" onClick={(e)=>setVal(val + e.target.value)}  >+</Button>
            </td>
          </tr>
          <tr>
            <td>
          <Button variant="contained" color="primary" value="1" onClick={(e)=>setVal(val + e.target.value)}>1</Button>
            </td>
            <td>
              <Button variant="contained" color="primary" value="2" onClick={(e)=>setVal(val + e.target.value)} >2</Button>
            </td>
            <td>
           <Button  variant="contained"  color="primary" value="3" onClick={(e)=>setVal(val + e.target.value)} >3</Button>
            </td>
            <td>
              <Button variant="contained" color="primary" onClick={()=>calculate()} >
                <span style={{ marginLeft: "-10%" }}>=</span>
              </Button>
            </td>
          </tr>
        </table>

        </Grid>
    );

}
