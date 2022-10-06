let str = "My Name is Rehman, I am Student Of Aptech";
let pattern = /\w+/gi;
let match = str.match(pattern)
console.log(match)

for(let char of match){
    document.write(char + '<br>')
}

// let matchindex = str.search(pattern);
// console.log(matchindex)

