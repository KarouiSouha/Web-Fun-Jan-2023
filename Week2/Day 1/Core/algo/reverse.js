
function reverse(array){
    var inv=[];
    for(var i=array.length-1; i>=0;i--){
        inv.push(array[i]);
    }
    return inv;
}
var arr=["s","o","u","h","a"];
var result=reverse(arr);
console.log(result);
/*
function reverse(array){
    var i=0;
    var j=arr.length-1;
    vhile(i<=j){
        var temp;
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        i--;
    }
}
*/
