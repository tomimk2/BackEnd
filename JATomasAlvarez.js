const cb=()=>console.log("Finalizado!")

const mostrarPalabra = (palabra,int=1000,cb) =>{
    let palabradis = palabra.split(' '); let i=0
    return new Promise((resolve)=>{
        
        const controlador = setInterval(()=>{
            if (i<palabradis.length){
                console.log(palabradis[i])
                i++
            } else {
                console.log("Cantidad de palabras", i)
                clearInterval(controlador)
                resolve(cb)
            }
        },int)
    })
}

const play = async ()=>{
    let first = await mostrarPalabra("Dulce de Leche",cb)
    let second = await mostrarPalabra("Queso untanble",2000,cb)
    let third = await mostrarPalabra("Chocotorta",2500,cb)
    cb();
}

play()