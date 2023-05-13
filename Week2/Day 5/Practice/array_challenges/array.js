//1.Always Hnagry
function alwaysHungry(arr) {
    var foundFood = false;
    for (var i=0; i<arr.length; i++) {
      if (arr[i] == "food") {
        console.log("yummy");
        foundFood = true;
      }
    }
    if (!foundFood) {
      console.log("I'm hungry");
    }
  }
  
  alwaysHungry([3.14, "food", "pie", true, "food"]);
  alwaysHungry([4, 1, 5, 7, 2]);

//2.High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
     for (var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
     }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 
//3.Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var count = 0
    for(var j=0;j<arr.length;j++){
        if(arr[j]>avg){
           count++;
        }
    }       
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 
//4.Array Reverse
function reverse(arr) {
    var i=0;
    var j=arr.length-1;
    while(i<=j){
        
       var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//5.Fibonacci Array
function fibonacciArray(n) {
  var fibArr = [0, 1];

  for (var i = 2; i < n; i++) {
    var nextFib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(nextFib);
  }

  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
