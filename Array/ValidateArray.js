// Prb, 1 Write a JavaScript function to check whether an 'input' is an array or not.

 function isArray(input){
     if(toString.call(input) == "[object Array]")
     return true;
     return false;
 }
 console.log(isArray(['innovative'])) ; 
 console.log(isArray(['45781296'])) ; 

