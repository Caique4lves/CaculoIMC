let nome;
let numero;
let media;

function saudacao() {
    console.log ('Olá, mundo!');
}

saudacao();

function saudacaoNome(nome) {

nome = prompt ('Qual o seu nome?');    // Aqui coloco o 'nome' como frase mesmo e não como uma ${variável}.
    console.log (`Olá, ${nome}`);

}

saudacaoNome();

function dobroNumero(numero) {

numero = prompt ('Digite um número.');
console.log (`${numero}` * 2);

}

dobroNumero();

function mediaTresnumeros(numero, media){

    numero1 = prompt ('Digite o primeiro número.');
    console.log (`este é o seu primeiro número, ${numero1}`);

    numero2 = prompt ('Digite o segundo número.');
    console.log (`Este é o seu segundo número, ${numero2}`);

    numero3 = prompt('Digite o terceiro número.');
    console.log (`Este é o seu terceiro número, ${numero3}`);

    media = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)) / 3;
    console.log (`A média dos três números é igual à: ${media}`);
}

mediaTresnumeros();

function numeroMaior(numero) {
    
    numero1 = prompt ('Digite o primeiro número.');
    console.log (`este é o seu primeiro número, ${numero1}`);

    numero2 = prompt ('Digite o segundo número.');
    console.log (`Este é o seu segundo número, ${numero2}`);
    
    if (numero1 > numero2) {
        
        console.log (`O número principal (${numero1}) é o maior!`);
    
    }else{ 
        if (numero1 < numero2){
                console.log (`ALERTA!!! O segundo número (${numero2}) é maior que o principal (${numero1})!`);
    }
            
    }
}
  

numeroMaior();

function numeroVezesEleMesmo(numero) {

    numero = prompt('Digite o número.');
    console.log(`${numero * numero}`);
    
}

numeroVezesEleMesmo();