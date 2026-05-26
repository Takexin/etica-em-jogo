const cartasPretas = [
    "carta1","carta2","carta3"
]

const cartasBrancas = [
    "carta6","carta7"
]

function randInt(min,max){
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}

document.getElementById("mudarBtn").addEventListener("click", (e)=>{
    const cartaPreta = cartasPretas[randInt(0, cartasPretas.length-1)]
    const cartaBranca = cartasPretas[randInt(0, cartasBrancas.length-1)]

    document.getElementById("card-1").innerText = cartaBranca
    document.getElementById("card-2").innerText = cartaPreta 
})