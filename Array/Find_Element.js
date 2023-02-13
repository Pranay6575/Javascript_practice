function removeItems(array , n){
    if (array == null)
    return 0;
    if(n == null)
    return array[0]
    if(n < 0)
    return []
    return array.slice(0,n)
};

console.log(removeItems([4,48,8,88,10],-1))
console.log(removeItems([45,52,11,80,101],2))
console.log(removeItems(["Cat","Dog","Horse","Monkey","Snake"],3))