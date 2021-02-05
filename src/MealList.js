import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import { ValueContext } from './FoodContext'
import { Grid, Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'    
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({ 
    card: { 
        width: 350, 
        marginTop: 20
    }, 
    title: { 
        fontFamily: 'Fredoka One', 
        fontSize: 20, 
        color: '#eb596e'
    }, 
    ingredients: { 
        color: 'gray', 
        fontSize: 14, 
        paddingLeft: 12
    }
})

const MealList = () => { 
    const classes = useStyles() 
    const { meal, dailyMeal } = useContext(ValueContext)
    return (
        <div> 
            <Grid> 
                {dailyMeal.length === 0 ? <Typography>Mahlzeit hinzufügen</Typography>  
                
                :  
                
                dailyMeal.map((item) => { 
                    return ( 
                        <Card key={item.id} className={classes.card}>  
                            <Grid container justify='center' style={{ paddingTop: 10, paddingBottom: 10, overflow: 'visible' }}> 
                                <Typography className={classes.title}>{item.mealName}</Typography> 
                            </Grid>
                            <Divider /> 
                            <Grid container direction='column' alignItems='flex-start'> 
                                <Typography className={classes.ingredients}>brennwert: {item.total['kcal']}kcal</Typography> 
                                <Typography className={classes.ingredients}>eisweiß: {item.total['protein']}g</Typography> 
                                <Typography className={classes.ingredients}>kohlenhydrate: {item.total['carbs']}g</Typography> 
                                <Typography className={classes.ingredients}>fette: {item.total['fette']}g</Typography> 
                                <Typography className={classes.ingredients}>menge: {item.total['menge']}g</Typography> 
                            </Grid>
                            <Accordion> 
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header"> 
                                    <Typography>Nahrungsmitteln:</Typography>
                                </AccordionSummary>  
                                <Divider />
                                <AccordionDetails>
                                    {item['foods'].map((foodItem, index) => {  
                                    return ( 
                                        <Typography key={foodItem.id}>{index + 1}.{foodItem.nahrungsmittel}</Typography>
                                    )
                                    })}          
                                </AccordionDetails>
                            </Accordion> 
                        </Card>
                        )
                })} 
                
            </Grid>    
        </div>
    )
}

export default MealList
