import React, { useState } from 'react'
import Employeeform from './Employeeform'
import Button from '../controls/Button'
import {Paper,makeStyles,TableBody,TableRow,TableCell,TblContainer} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { getAllEmployees } from '../../services/employeeService'
import { insertEmployee } from '../../services/employeeService'
import { updateEmployee } from '../../services/employeeService'
import { deleteEmployee } from '../../services/employeeService'
import useTable from '../controls/useTable'
import Popup from '../controls/Popup'
import ActionButton from '../controls/ActionButton'
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import CloseIcon from "@material-ui/icons/Close"
import Notification from '../controls/Notification'

const useStyles=makeStyles(theme=>({
   pageConent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
   },
   newButton:{
    position:'absolute',
    right:"50px",
    top:"80px"
   }
}))
const columns=[
    {id:"1",label:"Employee Name"},
    {id:"2",label:"Email Adress(Personal)"},
    {id:"3",label:"Mobile Number"},
    {id:"4",label:"Department"},
    {id:"5",label:"Actions"}
]
export default function Employees() {
    const classes=useStyles()
    const[recordForEdit,setRecordForEdit]=useState(null)
    const[records,setRecords]=useState(getAllEmployees())
    const[notify,setNotify]=useState({isOpen:false,message:"",type:""})
   const {TblContainer,TblHead} =useTable(records,columns)
   const[openPopup,setOpenPopup]=useState(false)
const addOrEdit=(employee,resetForm)=>{ 
insertEmployee(employee)
resetForm()
setOpenPopup(false)
setRecords(getAllEmployees())
setNotify({
    isOpen:true,
    message:"Submitted Successfully",
    type:"success"
})
// if(employee.id!==0){
//     insertEmployee(employee)
//     setOpenPopup(false)
//     setRecords(getAllEmployees())
// }
// else{
//     updateEmployee(employee)
//     setOpenPopup(false)
//     setRecords(getAllEmployees())
// }

   }
   const openInPopup=item=>{
    setRecordForEdit(item)
    setOpenPopup(true)
   }
   const onDelete=(id)=>{
    if(window.confirm("Are You Sure to Delete this Record?")){
    deleteEmployee(id)
    setRecords(getAllEmployees())
    setNotify({
        isOpen:true,
        message:"Deleted Successfully",
        type:"error"
    })
   }
}
  return (
    <>
    <Paper className={classes.pageConent}>
{/* <Employeeform/> */}
<Button
className={classes.newButton}
text="Add New"
variant="outlined"
startIcon={<AddIcon/>}
onClick={()=>setOpenPopup(true)}>

</Button>
<TblContainer>
    <TblHead/>
    <TableBody>
    {/* <Button
text="Add New"
variant="outlined">

</Button> */}
{
    records.map(item=>(
        <TableRow key={item.id}>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.mobile}</TableCell>
            <TableCell>{item.department}</TableCell>
           <TableCell>
            <ActionButton
            color="primary"
            onClick={()=>{openInPopup(item)}}>
                <EditOutlinedIcon fontsize="small"/>
            </ActionButton>
            <ActionButton
            color="secondary"
            onClick={()=>{onDelete(item.id)}}>
<CloseIcon fontsize="small"/>
            </ActionButton>
           </TableCell>
        </TableRow>
    ))
}
{/* <Button
text="Add New"
variant="outlined">

</Button> */}
    </TableBody>
</TblContainer>
    </Paper>
    <Popup
    title="Employee Form"
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}>
<Employeeform
recordForEdit={recordForEdit}
addOrEdit={addOrEdit}/>
    </Popup>
    <Notification
    notify={notify}
    setNotify={setNotify}/>
  {/* <Employeeform/> */}
</>
  )
}
