import React, { createContext, useState } from 'react'  
import uuid from 'uuid/v4'

export const ValueContext = createContext()

const initialState = {
        nahrungsmittel: '', 
        kcal: '', 
        protein: '', 
        carbs: '', 
        fette: '',  
        menge: ''
} 

const initialTotal = { 
        kcal: 0, 
        protein: 0, 
        carbs: 0, 
        fette: 0, 
        menge: 0, 
} 

const initialTitle = '' 

const initialFood = {  
        mealName: '', 
        foods: []
} 

const initialFoodArr = []



const FoodContext = (props) => { 

    const [inputs, setInputs] = useState(initialState)  
    const [total, setTotal] = useState(initialTotal) 
    const [food, setFood] = useState(initialFoodArr)    
    const [title, setTitle] = useState(initialTitle)  
    const [meal, setMeal] = useState({  
        mealName: '', 
        foods: []
    } )
    const [dailyMeal, setDailyMeal] = useState([])


    let foodSetProtein = Number(((inputs.protein)/100)*inputs.menge) 
    let foodSetCalories = Number(((inputs.kcal)/100)*inputs.menge)  
    let foodSetFat = Number(((inputs.fette)/100)*inputs.menge)  
    let foodSetCarbs = Number(((inputs.carbs)/100)*inputs.menge) 
   

    const addFood = () => {    
        food.push({ ...inputs, protein: foodSetProtein, kcal: foodSetCalories, fette: foodSetFat, carbs: foodSetCarbs }) 

        let findTotalAmount = food.map((item) => Number(item.menge))  
        let reduceAmount = findTotalAmount.reduce((a,b) => a + b) 

        let findTotalProtein = food.map((item) => Number(item.protein))   
        let reduceProtein = findTotalProtein.reduce((a,b) => a + b)  

        let findTotalCalories = food.map((item) => Number(item.kcal)) 
        let reduceCalories = findTotalCalories.reduce((a,b) => a + b)  

        let findTotalFat = food.map((item) => Number(item.fette)) 
        let reduceFat = findTotalFat.reduce((a,b) => a + b)  

        let findTotalCarbs = food.map((item) => Number(item.carbs)) 
        let reduceCarbs = findTotalCarbs.reduce((a,b) => a + b)     

       

        setTotal({ ...total, menge: reduceAmount, protein: reduceProtein, kcal: reduceCalories, fette: reduceFat, carbs: reduceCarbs })     
        setMeal({ id: uuid(), mealName: title, foods: [ ...food ], total: { ...total, menge: reduceAmount, protein: reduceProtein, kcal: reduceCalories, fette: reduceFat, carbs: reduceCarbs }  })   
        console.log(food)  
        console.log(inputs.nahrungsmittel)
        setInputs(initialState) 
        if ( inputs.nahrungsmittel === '' || inputs.kcal === '' || inputs.protein === '' || inputs.carbs === '' || inputs.fette === '' ) { 
            food.pop()  
        } 
    }   

    const addMeal = () => {  
       dailyMeal.push({ ...meal }) 
       setMeal(initialFood) 
       setFood([])  
       setTotal(initialTotal) 
       setTitle('')
       if (meal['mealName'] === "") { 
           dailyMeal.pop()
       }   
       dailyMeal.map((single) => {
       if ( single.total['kcal'] === 0 || single.total['protein'] === 0 || single.total['carbs'] === 0 || single.total['fette'] === 0 || single.total['menge'] === 0 ) { 
           dailyMeal.pop()
       }} )
       
       
    }

    const handleChange = (props) => (event) => { 
        setInputs({ ...inputs, [props]: event.target.value, id: uuid() }) 
    }   
    
    const handleTitle = (event) => { 
        setTitle(event.target.value) 
    }

    const handleSubmit = (event) => { 
        event.preventDefault() 
        setInputs(initialState) 
    }  

    const removeItem = (id) => { 
        setFood(food.filter((item) => item.id !== id)) 
        setInputs(initialState)
        
        let findTotalCarbs = food.map((item) => item.id === id ? Number(item.carbs) : null)  
        let reduceCarbs = findTotalCarbs.reduce((a,b) => a + b)   

        let findTotalProtein = food.map((item) => item.id === id ? Number(item.protein) : null)  
        let reduceProtein = findTotalProtein.reduce((a,b) => a + b)   

        let findTotalFat = food.map((item) => item.id === id ? Number(item.fette) : null)  
        let reduceFat = findTotalFat.reduce((a,b) => a + b) 

        let findTotalAmount = food.map((item) => item.id === id ? Number(item.menge) : null)  
        let reduceAmount = findTotalAmount.reduce((a,b) => a + b) 

        let findTotalCalories = food.map((item) => item.id === id ? Number(item.kcal) : null)  
        let reduceCalories = findTotalCalories.reduce((a,b) => a + b)

        setTotal({ ...total, carbs: Number(total.carbs - reduceCarbs), protein: Number(total.protein - reduceProtein), fette: Number(total.fette - reduceFat), menge: Number(total.menge - reduceAmount), kcal: Number(total.kcal - reduceCalories) }) 
        
        let removeFood = meal.foods.filter((item) => item.id !== id) 
        setMeal({ ...meal, foods: removeFood })
    }

    

    

    








    return (
        <ValueContext.Provider value={{ inputs, food, total, title, meal, dailyMeal, addFood, addMeal, handleChange, handleTitle, handleSubmit, removeItem }}> 
            {props.children}
        </ValueContext.Provider>
    )
}

export default FoodContext
