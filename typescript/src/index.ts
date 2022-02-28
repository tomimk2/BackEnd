let operation = async (num1: number,num2: number, name: string) =>{
     let op = await import ('./operation.js');
      if(name==="suma"){
             let result = op.suma(num1,num2);
             return result 
      }
   if(name==="resta") {
       let result = op.resta(num1,num2);
       return result
   }

}



let operations = async (num1: number, num2: number, name: string) =>{
    let resulting = await operation(num1,num2,name);
    console.log("Hicimos la" + name + "y dió como resultado " + resulting);

}


operations(2,5,"suma");
operations(20,3,"resta");
