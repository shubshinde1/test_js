// IIFE stands Immediate Invoked Funtion Expression
// Why we need IIFE?
// => 1. To immediate connect db when our app is open
//    2. To Don't intrupt with global scope polution we use IIFE
// IIFE Syntax: ()() like below

// named IIFE
(function two() {
    console.log(`DB Connected`);
})(); //this ";" is needed to end 1st IIFE's execution

// unnamed IIFE
(() => {
    console.log(`DB Connected two`);
})();

// with passing parameters
((name) => {
    console.log(`DB Connected three ${name}`);
})("shubham")