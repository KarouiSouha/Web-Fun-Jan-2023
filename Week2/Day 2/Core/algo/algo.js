function d6() {
    var roll = Math.random();
   roll= Math.ceil(5*roll)+1;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

