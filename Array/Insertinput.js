// Accept number as input and insert dashes(-) among two even Numbers.

const num = window.prompt("Enter Numb");
const str =num.toString();
const result = [str[0]];

for(let i=1; i<str.length; i++){
    if((str[i-1]%2 ==0) && (str[i]%2 == 0)){
        result.push('-')
    }
    else
    {
        result.push(str[i]);
    }
}
console.log(result.join(''))