const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const img = document.getElementById("robotron");
const color = document.getElementById("color");
const imagens = [
    "robotron-amarelo.png",
    "robotron-azul.png",
    "robotron-branco.png",
    "robotron-preto.png",
    "robotron-rosa.png",
    "robotron-vermelho.png"
]

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}
// let i = 0;
// img.addEventListener("click", () => {
//     i++;
//     if (i == imagens.length) {
//         i = 0
//     }
//     img.src = "img/" + imagens[i];
// });

color.addEventListener("input", e => {
    img.src = "img/robotron-" + e.target.value + ".png";
})