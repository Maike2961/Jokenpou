const choose = ['pedra', 'papel', 'tesoura']
let botaodecision = document.getElementById('botao')
let decision = document.getElementById('chooses')
let playerpc = document.querySelector(".playerpc")
let question = document.querySelector(".question")
let player2 = document.querySelector(".players")
let tela = document.getElementById('tela')

botaodecision.addEventListener('click', () => {
    if (decision.value == "maquina") {
        playerpc.style.display = "flex"
        question.style.display = "None"
        playermaquina()
    }
    else if (decision.value == 'jogador2') {
        player2.style.display = "flex"
        question.style.display = "None"
        players()
    } else {
        tela.innerHTML = "Escolha jogar somente PC com outro jogador "
    }
});

const players = () => {
    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")
    let envia = document.getElementById("envia")
    tela.innerHTML = ""
    let contador = 0

    envia.addEventListener("click", function () {
        if (contador < 7) {
            let player1value = player1.value
            let player2value = player2.value
            if (choose.includes(player1value) && choose.includes(player2value)) {
                if (player1value == player2value) {
                    tela.innerHTML = "Deu empate"
                } else {
                    if (player1value == "pedra" && player2value == "tesoura") {
                        tela.innerHTML = `A pedra ganhou de tesoura, jogador 1 ganhou`
                    } else if (player2value == "pedra" && player1value == "tesoura") {
                        tela.innerHTML= `A pedra ganhou de tesoura, jogador 2 ganhou`

                    } else if (player1value == "tesoura" && player2value == "papel") {
                        tela.innerHTML = `A tesoura ganhou de papel, jogador 1 ganhou`
                    } else if (player2value == "tesoura" && player1value == "papel") {
                        tela.innerHTML = `A tesoura ganhou de papel, jogador 2 ganhou`
                    }

                    else if (player1value == "papel" && player2value == "pedra") {
                        tela.innerHTML = `O papel ganhou de pedra, jogador 1 ganhou`
                    } else if (player2value == "papel" && player1value == "pedra") {
                        tela.innerHTML = `O papel ganhou de pedra, jogador 2 ganhou`
                    } else {
                        tela.innerHTML = "Erro reveja as jogadas no codigo"
                    }
                }
                contador++
                console.log(`Vc jogou ${contador} vezes`)
            } else {
                tela.innerHTML = "Não esta na lista"
            }
        } else {
            tela.innerHTML = "limite de jogadas atingidas"
        }
    });
}


const playermaquina = () => {
    let game = document.getElementById('game')
    let botao = document.getElementById('enviar')
    let contador = 0;
    console.log(`Repetição número ${contador + 1}`);
    botao.addEventListener("click", () => {
        if (contador < 7) {
            let n_aleatorio = Math.floor(Math.random() * choose.length)
            let value = choose[n_aleatorio]
            let player1 = game.value
            console.log(`Esse é o jogador 1 ${player1}`)
            console.log(`Esse é a maquina ${value}`)
            if (choose.includes(player1)) {
                if (player1 == value) {
                    tela.innerHTML = "Empate"
                } else {
                    if (value == "pedra" && player1 == "tesoura") {
                        tela.innerHTML = "A pedra ganha de tesoura, maquina vence"
                    } else if (player1 == "pedra" && value == "tesoura") {
                        tela.innerHTML = "A pedra ganha de tesoura, jogador vence"
                    }

                    else if (value == "tesoura" && player1 == "papel") {
                        tela.innerHTML = "A tesoura ganha de papel, maquina vence"
                    } else if (player1 == "tesoura" && value == "papel") {
                        tela.innerHTML = "A tesoura ganha de papel, jogador vence"
                    }

                    else if (value == 'papel' && player1 == "pedra") {
                        tela.innerHTML = "O papel ganha de pedra, maquina vence"
                    }
                    else if (player1 == 'papel' && value == "pedra") {
                        tela.innerHTML = "O papel ganha de pedra, jogador vence"
                    }
                    else {
                        tela.innerHTML ="Erro reveja o cogido de jogadas"
                    }
                }
                contador++
                console.log(`Vc jogou ${contador} vezes`)
            } else {
                tela.innerHTML = `O valor ${player1} Não está na lista`
            }
        } else {
            tela.innerHTML = "limite de jogadas atingidas"
            window.reload()
        }
    });
}