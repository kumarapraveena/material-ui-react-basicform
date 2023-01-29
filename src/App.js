import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/SideMenu';
import Header from './Components/Header';
import PageHeader from './Components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import Employee from './Components/Employee/Employee';
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
// import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import {makeStyles,withStyles} from "@material-ui/core"
const useStyles=makeStyles({
  appMain:{
    paddingLeft:"210px",
    width:"80%"
  }
})
function App() {
  const classes=useStyles()
  return (
    <>
    <div className={classes.appMain}>
      <SideMenu/>
   <Header/>
   {/* <Employee/> */}
      <PageHeader
      title="New Employee"
      subTitle="Validating Form"
      icon={<PeopleIcon/>}/> 
       <Employee/>

    </div>
    {/* <PageHeader
      title="Page Header"
      subTitle="Page description"
       icon={<PeopleOutlineIcon/>}
      /> */}
    {/* <SideMenu/> */}
    {/* <CssBaseline/> */}
    
    </>
  );
}

export default App;
