import React,{useState} from 'react'
import {makeStyles} from "@material-ui/core"
export function useForm(initialFvalues,validateOnChange=false,validate) {
    const[values,setValues]=useState(initialFvalues)
    const[errors,setErrors]=useState({})

    const handleInputChange=(e)=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
            }
            const resetForm=()=>{
                setValues(initialFvalues)
                setErrors({})
            }
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}
// import React from 'react'
const useStyles=makeStyles(theme=>({
    root:{
'& .MuiFormControl-root':{
    width:"70%",
    margin:theme.spacing(1)
}
    }
}))
export  function Form(props) {
    const classes=useStyles()
    const {children,...other}=props
  return (
    <form className={classes.root} autoComplete="off" {...other}>
{props.children}
    </form>
  )
}
