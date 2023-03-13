let input ="restaurant"
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []
for(let i=0;i<input.length;i++){
  input[i] == 'e' || input[i] == 'u' ? resultArray.push(input[i]):resultArray
  for(let j=0;j<vowels.length;j++){
    input[i] == vowels[j] ? resultArray.push(input[i]) : resultArray
  }
}

console.log(resultArray.join("").toUpperCase())
