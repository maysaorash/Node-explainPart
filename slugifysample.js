var slugify = require('slugify');


const text1 = slugify('some string some string');
const text2 = slugify('some string some string','*');

console.log(text1);
console.log(text2);
// console.log(text1,text2);

