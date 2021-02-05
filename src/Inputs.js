import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles'  
import { ValueContext } from './FoodContext'
import { Grid, Typography, Card, TextField, IconButton, InputAdornment, Divider, Paper } from '@material-ui/core'  
import AddCircleIcon from '@material-ui/icons/AddCircle' 
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({ 
    card: { 
        width: 500,  
        borderColor: '#6930c3', 
        borderWidth: 10, 
        borderStyle: 'solid', 
        borderRadius: 30
    }, 
    inputFields: {  
        '& fieldset': {
            borderColor: '#6930c3',
          },
          '&:hover fieldset': {
            borderColor: '#eb596e', 
          }, 
          '& label.Mui-focused': {
            color: '#eb596e',
          }, 
          '&.Mui-focused fieldset': {
            borderColor: '#eb596e',
          }, 
          '& .MuiInput-underline:after': {
            borderColor: '#eb596e',
          },
    },  
    fontBig: { 
        fontFamily: 'Fredoka One', 
        fontSize: 20, 
        color: '#eb596e'
    }, 
    totalFont: { 
        fontFamily: 'Josefin Sans', 

    }


})

const Inputs = () => { 
    const classes = useStyles() 
    const { inputs, food, total, addFood, addMeal, handleChange, handleTitle, handleSubmit, removeItem, title } = useContext(ValueContext) 
   
    
    

    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <Grid container>  
                <Grid item>    
                <Paper elevation={20} style={{ borderRadius: 30 }}>
                    <Card className={classes.card}>   
                        {/* MAHLZEIT */}
                        <Grid container justify='center' style={{ paddingTop: 20 }}> 
                            <Typography className={classes.fontBig}>Mahlzeit</Typography> 
                        </Grid>  
                        <Grid container justify='center'> 
                            <TextField 
                                    required
                                    id="outlined-margin-normal"
                                    label="Mahlzeit"
                                    variant="outlined"  
                                    helperText="*Name des Rezeptes"
                                    style={{ width: 400 }} 
                                    onChange={handleTitle} 
                                    value={title}  
                                    className={classes.inputFields}
                            />
                        </Grid>   
                        {/* NAHRUNGSMITTEL */}
                        <Grid container direction='column' style={{ paddingTop: 20 }}> 
                            <Grid container justify='center'> 
                                <Typography className={classes.fontBig}>Nahrungsmittel</Typography>
                            </Grid>  
                            {/* ZUTATEN INPUT */}
                            <Grid container justify='center' style={{ paddingTop: 20 }}>  
                                <TextField
                                            required
                                            id="outlined-required"
                                            label="Nahrungsmittel"
                                            value={inputs.nahrungsmittel} 
                                            variant="outlined"  
                                            style={{ width: 400 }} 
                                            onChange={handleChange('nahrungsmittel')}       
                                            className={classes.inputFields}
                                />
                            </Grid>  
                            {/* NAHRWERTE */}
                            <Grid container direction='row' justify='center' style={{ paddingTop: 20 }}>   
                                <TextField   
                                            required
                                            label="kcal"
                                            id="outlined-start-adornment"
                                            variant="outlined" 
                                            style={{ width: 100 }}  
                                            type='number'  
                                            value={inputs.kcal} 
                                            helperText='/100g'
                                            onChange={handleChange('kcal')}  
                                            className={classes.inputFields}
                                /> 
                                <TextField   
                                            required
                                            label="eiweiß"
                                            id="outlined-start-adornment"
                                            variant="outlined" 
                                            style={{ width: 100 }}   
                                            type='number'  
                                            value={inputs.protein} 
                                            helperText='/100g'
                                            onChange={handleChange('protein')} 
                                            className={classes.inputFields}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end"><strong>g</strong></InputAdornment>,
                                              }}
                                /> 
                                <TextField   
                                            required
                                            label="carbs"
                                            id="outlined-start-adornment"
                                            variant="outlined" 
                                            style={{ width: 100 }}   
                                            type='number'  
                                            value={inputs.carbs} 
                                            helperText='/100g'
                                            onChange={handleChange('carbs')} 
                                            className={classes.inputFields}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end"><strong>g</strong></InputAdornment>,
                                              }}
                                /> 
                                <TextField   
                                            required
                                            label="fette"
                                            id="outlined-start-adornment"
                                            variant="outlined" 
                                            style={{ width: 100 }}   
                                            type='number'  
                                            value={inputs.fette} 
                                            helperText='/100g'
                                            onChange={handleChange('fette')} 
                                            className={classes.inputFields}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end"><strong>g</strong></InputAdornment>,
                                              }}
                                />  
                            </Grid>   
                            <Grid container alignItems='center' direction='column' style={{ paddingTop: 20 }}> 
                                <Typography className={classes.fontBig}>Menge</Typography> 
                                <TextField   
                                            required
                                            label="menge"
                                            id="outlined-start-adornment"
                                            variant="outlined" 
                                            style={{ width: 100, marginTop: 20 }}   
                                            type='number'  
                                            value={inputs.menge} 
                                            onChange={handleChange('menge')} 
                                            className={classes.inputFields}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end"><strong>g</strong></InputAdornment>,
                                              }}
                                /> 
                            </Grid>
                            {/* ADD ICON */}
                            <Grid container justify='center'>  
                                <IconButton type='submit' onClick={addFood}> 
                                    <AddCircleIcon />
                                </IconButton> 
                            </Grid> 
                            <Divider style={{ height: 5 }} /> 
                            {/* ZUTATEN */} 
                            <Grid container> 
                                {food.map((item, index) => { 
                                    return ( 
                                            <Grid container key={item.id} style={{ backgroundColor: 'yellow' }} direction='column'>  
                                                <Typography>{index + 1}.{item.nahrungsmittel}</Typography> 
                                                <Typography>menge: {item.menge}g</Typography> 
                                                <Typography>kalorien: {item.kcal}kcal</Typography> 
                                                <Typography>eiweiß: {item.protein}g</Typography> 
                                                <Typography>carbs: {item.carbs}g</Typography> 
                                                <Typography>fette: {item.fette}g</Typography>  
                                                <IconButton onClick={() => removeItem(item.id)}> 
                                                    <DeleteIcon />
                                                </IconButton>
                                                <Divider style={{ height: 2 }} /> 
                                            </Grid>
                                    )
                                })}
                            </Grid>  
                             {/* WERTE - TOTAL */} 
                            <Grid justify='center' container style={{ paddingTop: 20, backgroundColor: '#64dfdf', paddingBottom: 20 }}>   
                                <Grid item> 
                                    <Grid container alignItems='center' justify='center'>   
                                        <Typography className={classes.fontBig}>INSGESAMT:</Typography> 
                                    </Grid>
                                    <Grid container justify='center' alignItems='center' direction='column'>
                                        <Typography className={classes.totalFont}>menge: {total.menge}g</Typography> 
                                        <Typography className={classes.totalFont}>kalorien: {total.kcal}kcal</Typography> 
                                        <Typography className={classes.totalFont}>eiweiß: {total.protein}g</Typography> 
                                        <Typography className={classes.totalFont}>carbs: {total.carbs}g</Typography> 
                                        <Typography className={classes.totalFont}>fette: {total.fette}g</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>   
                    </Card>  
                    </Paper>
                     {/* ADD ICON */}
                     <Grid container justify='center'>  
                        <IconButton onClick={addMeal}> 
                            <AddCircleIcon />
                        </IconButton> 
                    </Grid> 
                </Grid> 
            </Grid>
        </form> 
        </div>
    )
}

export default Inputs
