function numeroDeCartas(){
    let escolha = 0;

    while((escolha < 4) || (escolha > 14) || (escolha %2 != 0)){
        escolha = prompt("Quantas cartas deseja no jogo ? Escolha um número entre 4 e 14")
    }

    return escolha
}

function createCard () {
    let conjunto = document.querySelector(".cards");
    let escolha = numeroDeCartas() 

    for(let i = 0; i < escolha;i++){
        let cartaCriada = document.createElement("div");
        cartaCriada.classList.add("card");

        let imagemCriada = document.createElement("img");
        imagemCriada.src = "images/front.png";
        imagemCriada.classList.add("capa");

        cartaCriada.appendChild(imagemCriada);
        conjunto.appendChild(cartaCriada);
    }
}


createCard()