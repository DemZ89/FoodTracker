import React, { useContext } from 'react'   
import ValueContext from './FoodContext'
import Inputs from './Inputs'  
import MealList from './MealList' 
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography } from '@material-ui/core'  
import './font.css'

const useStyles = makeStyles({ 
    fonts: { 
        fontFamily: 'Fredoka One', 
        fontSize: 30
    }
})

const App = () => { 
    const classes = useStyles()
    return ( 
        <ValueContext>  
            <Grid container style={{ paddingTop: 50 }}>
                <Grid item container justify='center'> 
                        <Typography className={classes.fonts}>Foodtracker</Typography> 
                </Grid>
                <Grid  item container direction='row' justify='space-evenly' alignItems='center' style={{ paddingTop: 80 }}>
                    <Inputs /> 
                    <MealList />
                </Grid> 
            </Grid> 
        </ValueContext>
        
    )
}

export default App
