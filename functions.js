/*const coffeeOrder = (size, typeOfDrink) => {
    console.log(`I would like a ${size} ${typeOfDrink} please.`)
}
coffeeOrder("Medium", "Latte");
coffeeOrder("Small", "Cappucino");
coffeeOrder("Small", "Latte");
coffeeOrder("Large", "Americano");

// Functions need a return to make a result, but will still need a console.log:

const sum = (num1, num2) =>{
    return num1 + num2};
console.log(sum(2,66))

// There are two diffrent types on fucntions 

let orderCount = 0;
const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`)
orderCount++;
}

takeOrder ("Mushrooms", "Pepperoni", "Pineapple");
takeOrder ("Chicken", "Pepper", "Chilli");

console.log(`Order Count: ${orderCount}`)

*/
/*
let givenPin = 1234
let balance = 90

const cashWithdrawal =(pin, amount, accnum) => {
   
   if (givenPin==pin&&amount<=balance){
       console.log("Your withdrawal is being processed")
   }
   else if(givenPin==pin&&amount>balance){
       console.log("Insufficient funds")
   }
   else if(givenPin!=pin){
       console.log("Incorrect pin, try again")
   }
}

   cashWithdrawal(1234, 300, 50449921);
   cashWithdrawal(1234, 30, 50449921);
   cashWithdrawal(1254, 50, 50447921);
   cashWithdrawal(2341, 200, 68361847);
   cashWithdrawal(1234, 250, 57294717);
   */


   const sandwichOrder = (filling1, filling2, filling3, filling4, filling5) => {
    console.log(`Sandwich filled with ${filling1}, ${filling2}, ${filling3}, ${filling4} and ${filling5}`)
   }

sandwichOrder("Ham", "Cheese", "Lettuce", "Cucumber", "Butter");
sandwichOrder("Cheese", "Pickle", "Lettuce", "Cucumber", "Tomato");