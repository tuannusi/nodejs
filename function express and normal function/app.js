//Normal function
/*SayingSth();//nho goi function moi thuc thi dc
            //co thể gọi ở bất kì chỗ nào vì lúc này function đã được nodejs đưa vào Scope

function SayingSth(){
    console.log("Time to sleep");
}*/

//-------------------------------------------------------------

//Express function
/*var SayWakeUp = function(){
    console.log("Wake up");
}
SayWakeUp();//sau khi khoi tao xong bien moi có the goi duoc ham*/

//Cach goi ham khac cua express function
function CallFunc(func){
    func();
}

var SayWakeUp = function(){
    console.log("Wake up");
}

var GotoSchool = function(){
    console.log("UIT");
}

CallFunc(SayWakeUp);
CallFunc(GotoSchool);
