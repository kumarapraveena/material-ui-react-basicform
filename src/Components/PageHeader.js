// import React from 'react'
// import {Paper,Card,Typography} from "@material-ui/core"

// const PageHeader = (props) => {
//     const {title,subTitle,icon}=props;
//   return (
//     <Paper elevation={0} square>
// <div>
//     <Card>
//         {icon}
//     </Card>
//     <div>
//         <Typography
//         variant='h6'
//         component="div">{title}</Typography>
//         <Typography
//         variant='subtitle'
//         component="div">{subTitle}</Typography>

//     </div>
// </div>
//     </Paper>
//   )
// }

// export default PageHeader
import React from 'react'
import Employee from './Employee/Employee'
import {Paper,Card,Typography} from "@material-ui/core"
export default function PageHeader(props) {
    const{title,subTitle,icon}=props
  return (
    <Paper elevation={0} square>
        <div>
            <Card>
                {icon}
                <div>
            <Typography variant="h6"
            component="div">
{title}
            </Typography>
            <Typography variant="subtitle2"
            component="div">
{subTitle}
            </Typography>
        </div>
                </Card>
        </div>
        {/* <div>
            <Typography variant="h6"
            component="div">
{title}
            </Typography>
            <Typography variant="subtitle2"
            component="div">
{subTitle}
            </Typography>
        </div> */}
    </Paper>
  )
}
