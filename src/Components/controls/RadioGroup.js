import React from 'react'
import RadioGroup from "@material-ui/core/RadioGroup"   
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
export default function Radiogroup(props) {
    const {name,label,value,onChange,items}=props
  return (
    <FormControl>
<FormLabel>{label}</FormLabel>
    <RadioGroup row
        name={name}
        value={value}
        onChange={onChange}>
            {
                items.map((item)=>(
                    <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}/>
                ))
            }
            {/* <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/> */}

        </RadioGroup>
        </FormControl>

  )
}
