let botaoSom = document.querySelector(".botao-som")
let Video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

botaoSom.addEventListener("click",LigaSom)

function LigaSom(){
    Video.muted = false
}

botao.addEventListener("click",mostrarModal)
modal.addEventListener("click")


function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}


