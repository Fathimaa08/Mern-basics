let arr=[1,2,3,4]
// let sqrr=arr.map(function(n){
//     return n*2
    
// });
// console.log(sqrr)

//OR

function sqr(i){
    return i*2
}
var sqrr=arr.map(sqr)
console.log(sqrr);