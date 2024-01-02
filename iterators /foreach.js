// For each


// For each loop  on array
const arr = ["Shubham", "Aditya", "Kiran", "Dany", "Vishal", "Prashnat", "Ram"];

// foreach loop have to write with funtion
// foreach with normal funtion
arr.forEach(function (any) {
    // console.log(any);
})


// foreach with arrow function
arr.forEach((wht, inde) => {
    // console.log(inde, wht);
})

// Access array of object using foreach loop and print values
// we recive data from database in the format of array of objects so 
// using for_each loop iterate array of ojects is easy and simple way like below

const myArray = [
    {
        Fname: "Shubham",
        Lname: "Shinde"
    },
    {
        Fname: "Aditya",
        Lname: "Teke"
    },
    {
        Fname: "Ram",
        Lname: "Jawale"
    }
]

myArray.forEach((objs) => {
    console.log(objs.Fname);
})

// Foreach never returns any value ever