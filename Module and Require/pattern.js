//Function Expression

/*var dem = function(arrNum){//tao dem thanh mot function
    return 'There are ' + arrNum.length + ' elements in array in pattern';
}

var tong = function(a,b){
    return `Sum is ${a+b}`;
}

var tambiet = function(){
    console.log("Bye bye !!!");
}

//module.exports.(ten muon export) = name of Function Expression
module.exports.count = dem;
module.exports.sum = tong;
module.exports.bye = tambiet;*/

//-----------------------------------
/*module.exports.count = function(arrNum){//tao dem thanh mot function
    return 'There are ' + arrNum.length + ' elements in array in pattern';
}

module.exports.sum = function(a,b){
    return `Sum is ${a+b}`;
}

module.exports.bye = function(){
    console.log("Bye bye !!!");
}
*/
//------------------------------------
var dem = function(arrNum){//tao dem thanh mot function
    return 'There are ' + arrNum.length + ' elements in array in pattern';
}

var tong = function(a,b){
    return `Sum is ${a+b}`;
}

var tambiet = function(){
    console.log("Bye bye !!!");
}

//module.exports.(ten muon export) = name of Function Expression
module.exports = {
    count : dem,
    sum : tong,
    bye : tambiet,

}
