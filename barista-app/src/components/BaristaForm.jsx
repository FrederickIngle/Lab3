import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinks from "./drinks.json";
import '../App.css';


const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState({});

    //state variables for correct ingredients
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['vanilla', 'mocha', 'toffee', 'caramel', 'other', 'none'],
        'milk': ['cow','oat','almond','soy','other'],
        'blended': ['yes', 'no']
    }
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinks.drinks.length);
        setCurrentDrink(drinks.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinks.drinks[randomDrinkIndex].ingredients);
           }
    const onCheckAnswer = () => {
        //temperature
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }
        //syrup
        if (trueRecipe.syrup != inputs['syrup']){
            setCheckedSyrup('wrong');
          }
          else {
            setCheckedSyrup("correct");
          }
        //milk
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
          }
          else {
            setCheckedMilk("correct");
          }
        //blended
        if (trueRecipe.blended != inputs['blended']){
            setCheckedBlended('wrong');
          }
          else {
            setCheckedBlended("correct");
          }
    }
    const onNewDrink = () => {
        getNextDrink();
        setInputs({

            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
       
    }


  
  return (
    <div>
        <h2>Hi, I'd like to order a:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button type = "new-drink-button" className="button newdrink" onClick={onNewDrink}>🔄</button>
        </div>
        <form className="container">

         <div className = "mini-container">
            <h3>Temperature:</h3>

            <div className="answer-space" id={correct_temp} >
                {inputs["temperature"]} 
            </div>

            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
            />
        </div>

        <div className = "mini-container">

            <h3>Syrup:</h3>

            <div className="answer-space" id={correct_syrup}>
                {inputs["syrup"]} 
            </div> 

            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
            />
        </div>

        <div className = "mini-container">

            <h3>Milk:</h3>

            <div className="answer-space" id={correct_milk}>
                {inputs["milk"]} 
            </div> 

            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
            />
        
        </div>

        <div className = "mini-container">

            <h3>Blended:</h3>

            <div className="answer-space" id={correct_blended}>
                {inputs["blended"]} 
            </div> 

            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
            />
        </div>
                        
            

        </form>
        <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
        <button type = "new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
    </div>
  );
  
};

export default BaristaForm;