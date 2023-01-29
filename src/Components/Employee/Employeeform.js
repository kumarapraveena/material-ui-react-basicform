import React,{useState,useEffect} from 'react'
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import {useTheme} from "@material-ui/core/styles"
import {makeStyles,withStyles} from "@material-ui/core"
import {useForm,Form} from '../useForm'
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"   
import Input from '../controls/Input'
import Radiogroup from '../controls/RadioGroup'
import Select from '../controls/Select'
import Checkbox from '../controls/Checkbox'
import DatePicker from '../controls/DatePicker'
import { GetDepartmentCollection } from '../../services/employeeService'
import Button from '../controls/Button'
import { insertEmployee } from '../../services/employeeService'
// const useStyles=makeStyles(theme=>({
//     root:{
// '& .MuiFormControl-root':{
//     width:"80%",
//     margin:theme.spacing(1)
// }
//     }
// }))
const genderItems=[
    {id:"male",title:"Male"},
    {id:"female",title:"Female"},
    {id:"other",title:"Other"},
]
const initialFvalues={
    id:0,
    fullName:"",
    email:"",
    city:"",
gender:"male",
departmentId:"",
hireDate:new Date(),
isPermanent:false}
// const {
//     values,
//     setValues
//    } =useForm(initialFvalues)
export default function Employeeform(props) {
    const {addOrEdit,recordForEdit}=props
    // const[values,setValues]=useState(initialFvalues)
   
    // const classes=useStyles()
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if("fullName" in fieldValues)
        temp.fullName=fieldValues.fullName ? "":"This field is required"
        if("email" in fieldValues)
      temp.email=(/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is Not Valid"
      if("mobile" in fieldValues)
     temp.mobile=fieldValues.mobile.length>9?"":"Mininmum 10 Numbers are required"
     if("departmentId" in fieldValues)
  temp.departmentId=fieldValues.departmentId.length!=0?"":"This field is required"
setErrors({
    ...temp
})
if(fieldValues==values)
return Object.values(temp).every(x=>x=="")
    }
    const {
        values,
        setValues,errors,setErrors,handleInputChange,resetForm
       } =useForm(initialFvalues,true,validate)
//     const handleInputChange=(e)=>{
// const{name,value}=e.target
// setValues({
//     ...values,
//     [name]:value
// })
//     }
useEffect(()=>{
if(recordForEdit!==null){
    setValues({
        ...recordForEdit
    })
}
},[recordForEdit])
const handleSubmit=(e)=>{
    e.preventDefault()
    if(validate()){
        // insertEmployee(values)
        //  resetForm()
        addOrEdit(values,resetForm)
    }
    // window.alert("testing")
    
}
  return (
  
    <Form onSubmit={handleSubmit}>
<Grid container>
<Grid item xs={6}>
    <Input
    name="fullName"
    label="Full Name"
    value={values.fullName}
    onChange={handleInputChange}
    error={errors.fullName}
    />
{/* <TextField
    variant="outlined"
    label="Full Name"
    value={values.fullName}
    name="fullName"
    onChange={handleInputChange}/> */}
    {/* <TextField
    variant="outlined"
    label="Email"
    value={values.email}/> */}
    <Input 
    label="Email"
    name="email"
    value={values.email}
    onChange={handleInputChange}
    error={errors.email}
    />
    <Input
    // name="mobile"
    label="Mobile"
    name="mobile"
    value={values.mobile}
    onChange={handleInputChange}
    error={errors.mobile}
    />
    <Input
    name="city"
    label="City"
    value={values.city}
    onChange={handleInputChange}
    error={errors.city}
    />
</Grid>
<Grid item xs={6}>
    <Radiogroup
    name="gender"
    label="Gender"
    value={values.gender}
    onChange={handleInputChange}
    items={genderItems}/>
    <Select
    name="departmentId"
    label="Department"
    value={values.departmentId}
    onChange={handleInputChange}
    options={GetDepartmentCollection()}
    />
    {/* <FormControl> */}
        {/* <FormLabel>Gender</FormLabel> */}
        {/* <RadioGroup row
        name="gender"
        value={values.gender}
        onChange={handleInputChange}>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>

        </RadioGroup> */}
    {/* </FormControl> */}
    <Checkbox
    name="isPermanent"
    label="Permanent Employee"
    value={values.isPermanent}
    onChange={handleInputChange}/>
   <DatePicker
   name="hireDate"
   label="Hire Date"
   value={values.hireDate}
   onChange={handleInputChange}/>
   <div>
<Button 
type="submit"
text='Submit'>

</Button>
<Button 
// type="submit"
color='default'
text='Reset'
onClick={resetForm}>

</Button>
   </div>
</Grid>
</Grid>
</Form>
   
  )
}
