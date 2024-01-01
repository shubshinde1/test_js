// Arrow function is the feature of ES6 
// before know what is arrow funtion we must now the 
// "This" keyword 

// understtod "This" with the help of objects. 
const user = {
    username: "shubham",
    price: 10000,

    welcomeMsg: function () {
        console.log(`${this.username}, Welcome to Website`);  // "This" represents the whole context of user var (Ln.5)
    }
}
user.welcomeMsg() //To calling method we have to use "()"

// OP: shubham, Welcome to Website