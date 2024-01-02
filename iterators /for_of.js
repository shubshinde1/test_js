// for of loops


// break block when got space using forof loop
const arr = "hellowor d";

for (const word of arr) {
    if (word === " ") {
        break;
    }
    // console.log(word);
}


// for of on maps 


// map does not taking duplicate vales.
// map is known for unique values
// map follows inserting sequence other side objects does not follows
const map = new Map();
map.set('IN', "india")
map.set('IN', "india")
map.set('SA', "south africa")
map.set('PAK', "pakistan")

console.log(map);

// for of loops on map

for (const [key, value] of map) { // this [key, value] makes destructring the array
    // console.log(key, ":-", value);
}



// for of on objects

const obj = {
    'game1': 'NFS',
    'game2': 'CALL OF DUTY'
}
for (const [key, vales] of obj) {
    console.log(key, ":", vales);
}

// actually for of not work on objects
// for the object we have to use for in loop