const perguntas = [
    { imagem: "/images/cachorro.png", palavra: "Ca__orro", opcoes: ["ch", "x", "sh", "cl"], correta: 0 },
    { imagem: "/images/gato.png", palavra: "Ga__", opcoes: ["te", "to", "go", "ti"], correta: 1 },
    { imagem: "/images/cavalo.png", palavra: "Ca__lo", opcoes: ["ce", "ju", "ca", "va"], correta: 3 },
    { imagem: "/images/coelho.png", palavra: "C__lho", opcoes: ["eo", "ou", "oe", "oi"], correta: 2 },
    { imagem: "/images/macaco.png", palavra: "Ma__co", opcoes: ["ca", "gi", "ni", "co"], correta: 0 },
    { imagem: "/images/bola.png", palavra: "Bo__", opcoes: ["lo", "la", "ba", "bo"], correta: 1 },
    { imagem: "/images/carro.png", palavra: "Car__", opcoes: ["ru", "re", "de", "ro"], correta: 3 },
];

let c = 3; // contador de pontos
let indiceAtual = 0; // 

function carregarPergunta() {
    let p = perguntas[indiceAtual];
    document.getElementById("imagem").src = p.imagem;
    document.getElementById("palavra-incompleta").innerText = p.palavra;
    document.querySelectorAll(".opcoes button").forEach((btn, i) => {
        btn.innerText = p.opcoes[i];
    });
}

function verificarResposta(indice) {
    let correta = perguntas[indiceAtual].correta;
    let feedback = document.getElementById("feedback");
    let vidas = document.getElementById("life");
    
    
    feedback.innerText = (indice === correta) ? "Correto!" : "Errado!";
    feedback.style.color = (indice === correta) ? "green" : "red";
    if(indice != correta){
        c--;
        if(c == 2){
            vidas.innerText = "♥♥";
        }
        if(c==1){
            vidas.innerText = "♥";
    
        }
        if(c == 0){
            vidas.innerText = ""
            feedback.innerText = "Você perdeu!"
            feedback.style.fontSize = "30px"
            setTimeout(()=>{
                location.reload()
            }, 1000)
    }

    
    }
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % perguntas.length;
        carregarPergunta();
        feedback.innerText = "";
    }, 1000);
    
}

window.onload = carregarPergunta;