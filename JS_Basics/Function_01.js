// Functions without value
const hello =()=>{
    console.log("What is your answer? My answer is also same")
  }
  
  // Function with value
  const pushpa =()=>{
    console.log("Hey Man")
    return "fire hai main"
  }
  
  // Sum program by function
  
  const sum = (j,k)=>{
    return j+k
  }
  
  // Average programe by functon
  function myfun(x , y){
    console.log("Done")
    return Math.round((x + y)/2)
  }
  
  let a = 10;
  let b = 20;
  let c = 5;
  let v = pushpa();
   hello();
  console.log(sum(9,8))
  console.log(v)
  console.log("Average of a and b", myfun(a,b))
  console.log("Average of b and c", myfun(b,c))
  console.log("Average of a and c", myfun(a,c))