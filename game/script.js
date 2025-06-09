const perguntas = [
    { imagem: "/images/cachorro.png", palavra: "Ca__orro", opcoes: ["ch", "x", "sh", "cl"], correta: 0 },
    { imagem: "/images/gato.png", palavra: "Ga__", opcoes: ["te", "to", "go", "ti"], correta: 1 },
    { imagem: "/images/cavalo.png", palavra: "Ca__lo", opcoes: ["ce", "ju", "ca", "va"], correta: 3 },
    { imagem: "/images/coelho.png", palavra: "C__lho", opcoes: ["eo", "ou", "oe", "oi"], correta: 2 },
    { imagem: "/images/macaco.png", palavra: "Ma__co", opcoes: ["ca", "gi", "ni", "co"], correta: 0 },
    { imagem: "/images/bola.png", palavra: "Bo__", opcoes: ["lo", "la", "ba", "bo"], correta: 1 },
    { imagem: "/images/carro.png", palavra: "Car__", opcoes: ["ru", "re", "de", "ro"], correta: 3 },
    { imagem: "/images/abelha.png", palavra: "Ab__ha", opcoes: ["el", "al", "il", "el"], correta: 0 },
    { imagem: "/images/elefante.png", palavra: "El__ante", opcoes: ["ef", "if", "ot", "ur"], correta: 0 },
    { imagem: "/images/pato.png", palavra: "Pa__", opcoes: ["to", "ta", "co", "lo"], correta: 0 },
    { imagem: "/images/sapo.png", palavra: "Sa__", opcoes: ["bo", "po", "fo", "mo"], correta: 1 },
    { imagem: "/images/tigre.png", palavra: "Ti__e", opcoes: ["gr", "cr", "bl", "gu"], correta: 0 },
    { imagem: "/images/urso.png", palavra: "U__o", opcoes: ["ro", "rç", "rs", "ns"], correta: 2 },
    { imagem: "/images/zebra.png", palavra: "Ze__a", opcoes: ["pr", "gr", "br", "cr"], correta: 2 },
    { imagem: "/images/peixe.png", palavra: "Pe__e", opcoes: ["ix", "ch", "sh", "xe"], correta: 0 },
    { imagem: "/images/galinha.png", palavra: "Ga__nha", opcoes: ["li", "ni", "mi", "ti"], correta: 0 },
    { imagem: "/images/leao.png", palavra: "Le__", opcoes: ["al", "am", "au", "ao"], correta: 3 },
    { imagem: "/images/jacare.png", palavra: "Ja__aré", opcoes: ["ga", "ca", "ce", "co"], correta: 1 },
    { imagem: "/images/tartaruga.png", palavra: "Tarta__ga", opcoes: ["ru", "gu", "du", "fu"], correta: 0 },
    { imagem: "/images/cobra.png", palavra: "Co__ra", opcoes: ["pr", "br", "dr", "gr"], correta: 1 },
    { imagem: "/images/papagaio.png", palavra: "P__agaio", opcoes: ["op", "ap", "ep", "ip"], correta: 1 },
    { imagem: "/images/aranha.png", palavra: "Ar__ha", opcoes: ["al", "er", "in", "an"], correta: 3 },
    { imagem: "/images/pinguim.png", palavra: "Pin__im", opcoes: ["gu", "qu", "gi", "gi"], correta: 0 },
    { imagem: "/images/porco.png", palavra: "Po__o", opcoes: ["rc", "lv", "ar", "or"], correta: 0 },
    { imagem: "/images/vaca.png", palavra: "Va__", opcoes: ["qa", "ga", "ka", "ca"], correta: 3 },
    { imagem: "/images/peru.png", palavra: "Pe__", opcoes: ["lu", "tu", "ru", "cu"], correta: 2 },
    { imagem: "/images/hipopotamo.png", palavra: "Hipop__amo", opcoes: ["ut", "ot", "at", "og"], correta: 1 }
];

let c = 3; // contador de pontos de vida | a variavel "c" é a que define a pontuação de vida em 3 corações
let indiceAtual = 0; // indiceAtual se refere a fase atual, o colocamos aqui para o caso de manutenções futuras

function carregarPergunta() { // aqui é a função de carregar perguntas, que basicamente carrega as perguntas de cada fase
    let p = perguntas[indiceAtual]; // foi criado a variavel "p" que recebe a pergunta da indice(fase) atual
    document.getElementById("imagem").src = p.imagem; //busca o url da imagem que está no objeto "imagem" dentro do array "peruntas" acima.
    document.getElementById("palavra-incompleta").innerText = p.palavra; //busca a palavra incompleta no array acima e adiciona ao site.
    document.querySelectorAll(".opcoes button").forEach((btn, i) => {//cada opcao da fase atual se torna um botao e é adicionado ao site. 
        btn.innerText = p.opcoes[i]; 
    });
}

function verificarResposta(indice) { //funcao de verificacao de resposta
    let correta = perguntas[indiceAtual].correta; //a variavel correta recebe a posicao que está no objeto "correta" dentro do array.
    let feedback = document.getElementById("feedback");//a variavel feedback recebe a informação
    let vidas = document.getElementById("life"); //a variavel life é responsavel por mostrar e retirar os corações na tela caso a pessoa erre.
    
    
    feedback.innerText = (indice === correta) ? "Correto!" : "Errado!"; //um ternario, responsavel por alterar o texto de acordo com o feedback.

    feedback.style.color = (indice === correta) ? "green" : "red";//um ternario responsavel por alterar a cor do texto de acordo com o feedback.
    if(indice != correta){ //se a funcao foi diferente de correta
        c--;// é removido um coração
        if(c == 2){
            vidas.innerText = "♥♥"; //se a pontuação de vida for igual a 2, ele mostra dois corações
        }
        if(c==1){
            vidas.innerText = "♥"; //se a pontuação de vida for igual a 1, ele mostra um corações
    
        }
        if(c == 0){ // se a pontuação de vida for igual a 0
            vidas.innerText = "" //todos os coracoes sao removidos
            feedback.innerText = "Você perdeu!" //no feedback aparece a mensagem voce perdeu
            feedback.style.fontSize = "30px" //aumenta um pouco o tamanho da fonte da mensagem informando a derrota
            setTimeout(()=>{
                location.href = "../choice/choice.html"; //envia o usuario para a pagina de escolha quando acabam as vidas
            }, 1000)
    }

    
    }
    setTimeout(() => {// responsavel por esperar um segundo depois de apertar o botao para carregar a proxima pergunta
        indiceAtual = (indiceAtual + 1) % perguntas.length;
        carregarPergunta();
        feedback.innerText = "";
    }, 1000); // assim possibilitando o usuario a ver o feedback
    
}

window.onload = carregarPergunta; //assim que a pagina carregar, a funcao carregar pergunta é chamada.