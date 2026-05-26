const cartasBrancas = [
    "Amor da sua vida", "Andre", "Tung Tung Tung Sahur 🤦‍♂️", "Feijão", "Ovo de gema dura", "Gato"
]
const cartasPretas = [
    "Videogames","Denis", "67", "Arroz", "Ovo de gema mole", "Cachorro" 
]


index = -1;

document.getElementById("mudarBtn").addEventListener("click", (e)=>{
    if(index != cartasPretas.length-1){
        index++
    }
    else{
        document.getElementById("main").style.display = "none";
        document.getElementById("final").style.display = "flex";
    }


    let cartaPreta = cartasPretas[index];
    let cartaBranca = cartasBrancas[index];

    document.getElementById("card-1").innerText = cartaBranca;
    document.getElementById("card-2").innerText = cartaPreta ;


})