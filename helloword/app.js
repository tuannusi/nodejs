console.log("hello world!");
var value = 0;

/*setTimeout(function()//thuc thi lenh sau ms
{
    console.log("after 3 secs");
},3000);*/

var time = setInterval(function()// thuc thi va lap lai lenh sau ms
{
    value += 2;
    console.log(value + "testing");
    if(value >10)
        clearInterval(time);
}, 2000);