export let suma = (num1: number, num2: number) =>{
     return new Promise ((resolve) => {
         resolve(num1+num2)
     })
}

export let resta =(num1: number, num2: number) =>{
    return new Promise ((resolve) => {
        resolve(num1-num2)
    })
}