// for in

// Object in for in loop
const obj = {
    IN: 'india',
    SA: 'south africa',
    USA: 'united states of america'
}

for (const key in obj) {
    // console.log(`${key} : ${obj[key]}`);
}



// Array in for in loop
let arr = ["sup", "bat", "xmen"];
for (const indx in arr) {
    console.log(`${indx} : ${arr[indx]}`);
}