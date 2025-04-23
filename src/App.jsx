import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return <div className='container'>
    <Header/>
    <Menu/>
  <Footer/>
  </div>
}

export default App

function Header(){

  return <header className='header'>
  <h1>Fast React Pizza Co.</h1>
  </header>;

//  return <h1 style={{color:"red", fontSize:"48px", textTransform:"uppercase"}}>Fast React Pizza Co.</h1>;
}
function Menu(){
return <main className='menu'><h2>Our Menu</h2>
<div className='pizzas'>
{pizzaData.map((pizza)=>{ return(
  <Pizza name={pizza.name} ingredients = {pizza.ingredients} photoName = {pizza.photoName} price = {pizza.price} soldOut = {pizza.soldOut} key = {pizza.name}/>);
} )}
</div>
</main>;


}


function Pizza(props){
  console.log(props);
  return <div className='pizza'>
    <img src={props.photoName} alt={props.name} srcSet="" />
    <div>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <span>{props.soldOut? "Sold Out!": props.price}</span>
    </div>
  </div>
  
}

function Footer(){
const hour = new Date().getHours();
const opeHour = 12;
const closeHour = 23;
const isOpen = hour>=opeHour && hour<=closeHour
console.log(hour)
if(isOpen){
  // console.log("Resturant is open");
  alert("We are open right now");
} else {
  // console.log(`We are open at ${opeHour} and close at ${closeHour}` );
  alert(`We are open at ${opeHour} :00 and close at ${closeHour} :00`);
}
  // return React.createElement("footer", null, "We're currently open!");
  return <footer className='footer'>{new Date().toLocaleTimeString()} We are currently open!</footer>;

}
