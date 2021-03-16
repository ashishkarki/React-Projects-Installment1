// import React from 'react'

// const Loading = () => {
//  return (
//   <div className="loader">
//   </div>
//  )
// }

// export default Loading

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}))

export default function Loading() {
    const classes = useStyles()

    return (
        <div className={ classes.root }
            style={
                { margin: '25% 40%' }
            }>
            <CircularProgress />
            <CircularProgress color="secondary" />
        </div>
    )
}
