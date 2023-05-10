function pizzaFactory(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaFactory("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
//console.log(p1);
var p2 = pizzaFactory("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
//console.log(p2);
var p3 = pizzaFactory("hand tossed","marinara","mozzarella","mushrooms");
//console.log(p3);
var p4 = pizzaFactory("deep dish","traditional",["mozzarella", "feta"],"onions");
//console.log(p4);

function pizzaOven( crustType, sauceType, cheeses, toppings){
return {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
};
}
function randomPizza(){
    crustType=["deep dish","hand tossed"];
    sauceType=["traditional","marinara"];
    cheeses=["mozzarella",["mozzarella", "feta"]];
    toppings=[["pepperoni","sausage"],["mushrooms", "olives", "onions"],"mushrooms","onions"];
    var r=[crustType,sauceType,cheeses,toppings];
    var pizza={};
    pizza.crustType = crustType[Math.floor(Math.random())+0.5];
    pizza.sauceType = sauceType[Math.floor(Math.random())+0.5];
    pizza.cheeses = cheeses[Math.floor(Math.random())+0.5];
    pizza.toppings = toppings[Math.floor(Math.random())*4+0.5];
    return pizza;
}
var p= randomPizza();
console.log(p);
