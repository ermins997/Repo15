// Only change code below this line
const milili = [10, 25, 4];
function myArr(mili) {
    "use strict";
    mili.push(mili.shift());
    mili.push(mili.shift());
    return mili;
}
// Using mili = [4, 10, 25] would be invalid
console.log(myArr(milili));
// Only change code above this line
module.exports = myArr;