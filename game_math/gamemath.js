const perguntas = [
    { imagem: "", conta: "5 + 2 ", opcoes: ["3", "4", "7", "8"], correta: 2    },
    { imagem: "", conta: "6 + 4", opcoes: ["10", "2", "8", "12"], correta: 0 },
    { imagem: "", conta: "10 - 3", opcoes: ["6", "3", "4", "7"], correta: 3 },
    { imagem: "", conta: "8 - 4", opcoes: ["2", "4", "5", "6"], correta: 1 },
    { imagem: "", conta: "9 + 8", opcoes: ["14", "15", "18", "17"], correta: 3 },
    { imagem: "", conta: "16 - 7", opcoes: ["7", "11", "9", "10"], correta: 2 },
    { imagem: "", conta: "20 - 14", opcoes: ["16", "6", "4", "14"], correta: 1 },
    { imagem: "", conta: "3 + 5", opcoes: ["7", "8", "6", "9"], correta: 1 },
    { imagem: "", conta: "7 - 2", opcoes: ["5", "4", "3", "6"], correta: 0 },
    { imagem: "", conta: "12 + 3", opcoes: ["14", "15", "13", "16"], correta: 1 },
    { imagem: "", conta: "15 - 6", opcoes: ["8", "9", "10", "11"], correta: 1 },
    { imagem: "", conta: "2 + 9", opcoes: ["10", "12", "11", "9"], correta: 2 },
    { imagem: "", conta: "18 - 9", opcoes: ["8", "7", "9", "10"], correta: 2 },
    { imagem: "", conta: "4 + 6", opcoes: ["10", "9", "8", "11"], correta: 0 },
    { imagem: "", conta: "14 - 5", opcoes: ["9", "10", "8", "7"], correta: 0 },
    { imagem: "", conta: "1 + 7", opcoes: ["8", "7", "6", "9"], correta: 0 },
    { imagem: "", conta: "17 - 8", opcoes: ["10", "8", "9", "7"], correta: 2 },
    { imagem: "", conta: "11 + 4", opcoes: ["15", "14", "16", "13"], correta: 0 },
    { imagem: "", conta: "13 - 5", opcoes: ["7", "6", "8", "9"], correta: 2 },
    { imagem: "", conta: "6 + 3", opcoes: ["8", "9", "7", "6"], correta: 1 },
    { imagem: "", conta: "5 + 4", opcoes: ["10", "8", "9", "7"], correta: 2 },
    { imagem: "", conta: "19 - 10", opcoes: ["8", "9", "10", "7"], correta: 1 },
];

let c = 3; // contador de pontos
let indiceAtual = 0; 

function carregarPergunta() {
    let p = perguntas[indiceAtual];
    document.getElementById("conta").innerText = p.conta;
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
            feedback.innerHTML = "Você perdeu!";
            feedback.style.fontSize = "30px"
            setTimeout(()=>{
                location.href = "../choice/choice.html";
            }, 1000)
        }

    
    }
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % perguntas.length;
        carregarPergunta();
        feedback.innerText = ""
    }, 1000);
    
}

window.onload = carregarPergunta;