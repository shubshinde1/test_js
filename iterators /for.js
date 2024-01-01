// for loop

// is typically used when ou know the number of iterators in advacnce


// print mod of 5
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        // console.log(`num is mod of 5`);
        continue;

    }
    // console.log(i);

}



// tables upto "i<=10" using nested for loops
for (let i = 0; i <= 10; i++) {
    // console.log(`${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + "*" + j + "=" + i * j);
    }

}


// print array using fro loop
let myarr = ["sup", "bat", "flash"];

console.log(myarr.length); // to know the array length
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}