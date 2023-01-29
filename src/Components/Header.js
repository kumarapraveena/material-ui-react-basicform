import React from 'react'
import {AppBar,Toolbar,Grid,InputBase,IconButton,Badge} from "@material-ui/core"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles,withStyles} from "@material-ui/core"
const useStyles=makeStyles({
  root:{
    backgroundColor:"#fff"
  },
  searchInput:{
    opacity:"0.6",
    padding:"0px 8px",
    fontSize:"0.8rem",
    "&:hover":{
      backgroundColor:"#f2f2f2"
    },
    '& .MuiSvgIcon-root':{
      marginRight:'8px'
    }
  },
//   btnRoot:{
// backgroundColor:"green"
//   },
//   btnLabel:{
//     backgroundColor:"red"
//   }
})
export default function Header() {
  const classes=useStyles()
  return (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
<Grid container
alignItems='center'>
<Grid item >
<InputBase
placeholder='Search topics'

className={classes.searchInput}
startAdornment={<SearchIcon fontSize='small'/>}/>
</Grid>
<Grid item sm></Grid>
<Grid item >
{/* <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}> */}
<IconButton>
<Badge badgeContent={4} color="secondary">
<NotificationsNoneIcon fontSize='small'/>
</Badge>
</IconButton>
<IconButton>
<Badge badgeContent={3} color="primary">
<ChatBubbleOutline fontSize='small'/>
</Badge>
</IconButton>
<IconButton>
<PowerSettingsNewIcon fontSize='small'/>
</IconButton>
</Grid>
</Grid>
        </Toolbar>
    </AppBar>
  )
}
