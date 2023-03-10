import React from 'react'
import {TextField} from "@material-ui/core"
export default function Input(props) {
    const{name,label,value,error=null,onChange}=props;
  return (
    <TextField
    variant="outlined"
    label={label}
    value={value}
    name={name}
    onChange={onChange}
    // error
    // helperText="some validation error"/>
    {...(error && {error:true,helperText:error})}/>
  )
}
