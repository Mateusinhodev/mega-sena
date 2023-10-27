const numerosApostados = [];
const numerosAleatorios = [];

const resultado = [];

let qtdAcertos= 0;

const btnJogar = document.getElementById("btnJogar");
btnJogar.disabled = true;

const btnSurpresinha = document.getElementById("btnSurpresinha");
btnSurpresinha.disabled = false;

sortearNumeros();

function sortearNumeros() {
    // sorteando os números
    for(i = 0; i < 6; i++) {
        let numeroSorteado = Math.round(Math.random() * 59 + 1);

        // condição para evitar que seja sorteado números iguais
        while(resultado.includes(numeroSorteado)) {
            numeroSorteado = Math.round(Math.random() * 59 + 1);
        }

        // adicionando os números sorteados ao array
        resultado.push(numeroSorteado);
    }
}

function selecionarNumeros(numero){
    if(numerosApostados.length >= 0 && numerosApostados.length < 6) {
        // adiciona numero a lista
        numerosApostados.push(numero);
        
        //desabilita o numero já selecionado
        desabilitarNumeroEscolhido(numero);

        
        // habilita o botão de jogar
        if(numerosApostados.length == 6) {
            btnJogar.disabled = false;

            // desabilitar o modo surpresinha quando algum numero for selecionado
            const btnSurpresinha = document.getElementById("btnSurpresinha");
            btnSurpresinha.disabled = true;

        }
    }

    
}

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#ff0000";
    document.getElementById("num_" + numero).style.color = "#ffffff";
}

function jogar() {
    // Fazer o jogo -  comparar os números sorteados com os apostados
    for(i = 0; i < numerosApostados.length; i++) {
        for(j = 0; j < resultado.length; j++) {
            if(numerosApostados[i] == resultado[j]) {
                qtdAcertos++;
            }
        }
    } 

    // mostrar o resultado
    const divResultado = document.getElementById("resultado");
    for (i = 0; i < resultado.length; i++) {
        divResultado.innerHTML += "<div class='resultadoCircle'>"+ resultado [i] +"</div>";
    }

    // mostrar quantidade de acertos
    let divAcertos = document.getElementById("acertos");
    divAcertos.innerHTML += "<div id='acertos'><p>Acertos</p> <p class='valor'>"+ qtdAcertos +"</p></div>";

    // desabilitar todos os botões
    desabilitarTodosNumeros();
}

function surpresinha() {

    // Numeros aleatórios sorteados
    for(i = 0; i < 6; i++) {
        let numeroAleatorio = Math.round(Math.random() * 59 + 1);

        // condição para evitar que seja sorteado números iguais
        while(numerosAleatorios.includes(numeroAleatorio)) {
            numeroAleatorio = Math.round(Math.random() * 59 + 1);
        }

        // adicionando os números aleatório ao array
        numerosAleatorios.push(numeroAleatorio)
    }

    // Fazer o jogo -  comparar os números aleatorios com os sorteados
    for(i = 0; i < numerosAleatorios.length; i++) {
        for(j = 0; j < resultado.length; j++) {
            if(numerosAleatorios[i] == resultado[j]) {
                qtdAcertos++;
            }
        }
    }
    
    // mostrar numeros aleatórios
    const divAleatorio = document.getElementById("surpresinha");
    for (i = 0; i < numerosAleatorios.length; i++) {
        divAleatorio.innerHTML += "<div class='surpresinhaCircle'>"+ numerosAleatorios [i] +"</div>";
    }

    if(numerosAleatorios.length == 6) {
        btnJogar.disabled = false;
    }
    // jogar();

    // desabilitar todos os botões
    desabilitarTodosNumeros();
}

function desabilitarTodosNumeros() {
    for(i = 1; i <= 60; i++) {
        document.getElementById("num_" + i).disabled = true;
    }
}

