let iniciar = false;

const linhas = 10;
const colunas = 10;

function cidade() {
    let cidade = document.querySelector('#cidade');
    let tabela = document.createElement('table');
for (let x = 0; x < linhas; x++) {
        let tr = document.createElement('tr');
        for (let y = 0; y < colunas; y++) {
            let célula = document.createElement('td');
            célula.setAttribute('id', x + '_' + y);
            célula.setAttribute('class', 'morta');
            célula.addEventListener('click',viverMorrer);
                 
            tr.appendChild(célula);
        }
        tabela.appendChild(tr);
    }
    cidade.appendChild(tabela);
}

function viverMorrer() {
    let localizacao = this.id.split("_");
    let obterLinha = Number(localizacao[0]);
    let ObterColuna = Number(localizacao[1]);  
    if (this.className === 'viva'){
        this.setAttribute('class', 'morta');
        geracao[obterLinha][ObterColuna] = 0;
    }else{
        this.setAttribute('class', 'viva');
        geracao[obterLinha][ObterColuna] = 1;       
    }
}

let geracao = [linhas];
let proxGeracao = [linhas];  


function criaGeracao() { 
    for (let x = 0; x < linhas; x++) {
        geracao[x] = new Array(colunas);
        proxGeracao[x] = new Array(colunas);
    }
}
function valorGeracao() {
    for (let x = 0; x < linhas; x++) {
        for (let y = 0; y < colunas; y++) {
            geracao[x][y] = 0;
            proxGeracao[x][y] = 0;
        }
    }
}

window.onload = function(){ 
    cidade();
    criaGeracao();
    valorGeracao();
}


function contVizinhos(l, c) {
    let count = 0;
    let numeroLinha = Number(l);
    let numeroColuna = Number(c);
    
    if (numeroLinha - 1 >= 0) {
        if (geracao[numeroLinha - 1][numeroColuna] == 1) 
            count++;
    }
     
    if (numeroLinha - 1 >= 0 && numeroColuna - 1 >= 0) {        
        if (geracao[numeroLinha - 1][numeroColuna - 1] == 1) 
            count++;
    }
    
    if (numeroLinha - 1 >= 0 && numeroColuna + 1 < colunas) {
            if (geracao[numeroLinha - 1][numeroColuna + 1] == 1) 
                count++;
    }
    
    if (numeroColuna - 1 >= 0) {
        if (geracao[numeroLinha][numeroColuna - 1] == 1) 
            count++;
    }
    
    if (numeroColuna + 1 < colunas) {
        if (geracao[numeroLinha][numeroColuna + 1] == 1) 
            count++;
    }
    
    if (numeroLinha + 1 < linhas && numeroColuna - 1 >= 0) {
        if (geracao[numeroLinha + 1][numeroColuna - 1] == 1) 
            count++;
    }
    
    if (numeroLinha + 1 < linhas && numeroColuna + 1 < colunas) {
        if (geracao[numeroLinha + 1][numeroColuna + 1] == 1) 
            count++;
    }
    
    if (numeroLinha + 1 < linhas) {
        if (geracao[numeroLinha + 1][numeroColuna] == 1) 
            count++;
    }
    return count;
}


function novaGeracao() {
    for (l in geracao) {
        for (c in geracao[l]) {
            let vizinhos = contVizinhos(l, c);
            if (geracao[l][c] == 1) {
                if (vizinhos < 2) {  
                    proxGeracao[l][c] = 0;
                } 
                else if (vizinhos == 2 || vizinhos == 3) {  
                    proxGeracao[l][c] = 1;
                } 
                else if (vizinhos > 3) {  
                    proxGeracao[l][c] = 0;
                }
            }
            else if (geracao[l][c] == 0) {
                if (vizinhos == 3) {  
                    proxGeracao[l][c] = 1;
                }
            }
        }
    }
}


function atualizaGeracao() {
    for (l in geracao) {  
        for (c in geracao[l]) {
            geracao[l][c] = proxGeracao[l][c];
        }
    }
}

function atualizaCidade() {  
    let celula='';
    for (l in geracao) {
        for (c in geracao[l]) {
            celula = document.getElementById(l + '_' + c);
            if (geracao[l][c] == 0) {
                celula.setAttribute('class', 'morta');
            }else {
                celula.setAttribute('class', 'viva');
            }
        }
    }
}


function iniciarParar(){
    let iniciarParar = document.querySelector('#btniniciarparar');
    if (!iniciar) {
       iniciar = true;
       iniciarParar = iniciarParar;
       evoluindo();
     }else {
        iniciar = false;
        iniciarParar = iniciarParar;
    }
}

function evoluindo(){
    novaGeracao();   
    atualizaGeracao();
    atualizaCidade();

    if (iniciar) {
        timer = setTimeout(evoluindo, 100);
    }
}
