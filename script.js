function numeroDeCartas() {
    let escolha = 0;

    while ((escolha < 4) || (escolha > 14) || (escolha % 2 != 0)) {
        escolha = prompt("Quantas cartas deseja no jogo ? Escolha um número entre 4 e 14")
    }

    return escolha
}

function createCard() {
    let conjunto = document.querySelector(".cards");
    let escolha = numeroDeCartas()

    for (let i = 0; i < escolha; i++) {
        let cartaCriada = document.createElement("div");
        cartaCriada.classList.add("card");
        cartaCriada.addEventListener("click",trocaImagem);

        let imagemCriada = document.createElement("img");
        imagemCriada.src = "images/front.png";
        imagemCriada.classList.add("capa");
        imagemCriada.id = i

        cartaCriada.appendChild(imagemCriada);
        conjunto.appendChild(cartaCriada);
    }

}

function sorteio (){
    let lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    let listaEmbaralhada = []

    while(listaEmbaralhada.length < lista.length){
        r = Math.floor(Math.random()*14)
        if(!(listaEmbaralhada.includes(r))){
            listaEmbaralhada.push(r)
        }
    }

    return listaEmbaralhada
}

function trocaImagem(event) {
    let elemento = event.target
    let id = elemento.id

    let carta = document.getElementById(id)
    carta.src = `images/cartas/${sorteio_cartas[id]}.gif`
}

createCard()
sorteio_cartas = sorteio()