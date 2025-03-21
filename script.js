let c = 0;
const perguntas = [
    { imagem: "cachorro.png", palavra: "Ca__orro", opcoes: ["ch", "x", "sh", "cl"], correta: 0 },
    { imagem: "gato.png", palavra: "Ga__", opcoes: ["te", "to", "go", "ti"], correta: 1 },
    { imagem: "cavalo.png", palavra: "Ca__lo", opcoes: ["ce", "ju", "ca", "va"], correta: 3 },
    { imagem: "coelho.png", palavra: "C__lho", opcoes: ["eo", "ou", "oe", "oi"], correta: 2 },
    { imagem: "macaco.png", palavra: "Ma__co", opcoes: ["ca", "gi", "ni", "co"], correta: 0 },
];

let indiceAtual = 0;

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
    let contador = document.getElementById("points");
    

    feedback.innerText = (indice === correta) ? "Correto!" : "Errado!";
    feedback.style.color = (indice === correta) ? "green" : "red";
    if(indice === correta){
        c+=1;
        contador.innerText = `${c} pts`
        // alert(`${c}`)
    }else if(indice != correta){
        c-=1;
        contador.innerText = `${c} pts`
        //    alert(`${c}`)
    }
    if(c == 5){
        alert("Você venceu!");
        c = 0;
        contador.innerText = `${c} pts`

    }
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % perguntas.length;
        carregarPergunta();
        feedback.innerText = ""
    }, 1000);
    
}

window.onload = carregarPergunta;