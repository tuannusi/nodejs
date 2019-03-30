console.log("hello");
var soluong = require('./module');//yeu cau module duoc goi trong ham require
                                // luc nay soluong trong app.js = dem trong module.js
console.log(soluong(['1','2','3','4']));

var patterntest = require('./pattern');
console.log(patterntest.count(['1','2','3','4']));
console.log(patterntest.sum(6,7));
console.log(patterntest.bye());
