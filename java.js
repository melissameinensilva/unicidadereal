
const fotos = [
    {
        imagem: "piscina 2.jpg",
        titulo: "Piscina",
        descricao: "Temos 3 piscinas incríveis de diversos tamanhos, para você aproveitar!"
    },
    {
        imagem: "café da manhã.jpg",
        titulo: "Café da manhã",
        descricao: "Desfrute de um delicioso café da manhã em nosso hotel."
    },
    {
        imagem: "quarto real 1.jpg",
        titulo: "Quarto de luxo",
        descricao: "Relaxe em nossos quartos espaçosos e elegantes."
    },
    {
        imagem: "quarto real2.jpg",
        titulo: "Quarto confortável",
        descricao: "Tenha uma experiência incrível de conforto e descanso."
    }
];

let indiceAtual = 0;

function atualizarFoto() {

    document.getElementById("fotoHotel").src =
        fotos[indiceAtual].imagem;

    document.getElementById("tituloFoto").textContent =
        fotos[indiceAtual].titulo;

    document.getElementById("descricaoFoto").textContent =
        fotos[indiceAtual].descricao;

}

function proximo() {

    indiceAtual++;

    if (indiceAtual >= fotos.length) {
        indiceAtual = 0;
    }

    atualizarFoto();

}

function anterior() {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = fotos.length - 1;
    }

    atualizarFoto();

}
