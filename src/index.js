const readline = require ('readline-sync');
//for
//enquanto uma determinada condiçao for verdadeira,faça algo
 
// quero q o contador começe em 0 e encremente de 1 em 1 ate 10
// for (variavel de controle; condiçao de repetiçao; encremento)
 
//na primeira iteraçao,ou seja na primera vez que a interaçao for executada
//vai criar e inicializar uma varialevel de controle
//em seguida vai validar uma execução sendo verdadeiro, vai executar
//caso a condiçao seja falsa vai sair da reptiçao

//for(let contador = 0; contador <=3; contador = contador + 1){
//    console.log("Passou"+contador+"vezes");
//}

//for (let i = 0;i <=3; i = i ++){
//  console.log("Passou"+i+"vezes");
//}

//while - enquanto 
//let contador = 0;
//while(contador <= 10){
//    console.log("Passou"+contador+"vezes");
//    contador ++;
//}
//let nome;
 // expressoes que podem ser validadas como verdadeiro ou falso mas nao sao verdadeiro e falso 
 //truthy- 1,(ou numero maior que zero), != undefined 
 // falsy- undefined, 0, string vazia, false, NaN, null 
 //condicao abaixo nega o valor de nome 
 // nome == undefined && nome == "" && nome == false
 // !nome - faz todas as validacoes da linha acima 
 //while(!nome){
 //   console.log("Nome invalido");
 //   nome = readline.question("Informe um nome: ");
 //}


//for - para (inicializa var controle; condicao; incremento)
//while - enquanto (condicao verdadeira)
//do while - faça enquanto (condicao verdadeira)

//while deve ser usado quando nao temos certeza da condicao e
//nao precisamos executar pelo menos 1 vez 


// do while vai ser executado pelo menos 1 vez para poder validar a condicao 

//const valor = readline.questionInt("Informe um numero inteiro: ");

//while(valor > 0){
//    console.log("Valor maior que zero:")
//    break;
//}

const senha = "123456"
let senhaValida = false;//flag
let vezes = 0;
do{
    const senhaDigitada = readline.questionNewPassword("Informe a senha")
    if(senha === senhaDigitada){
        console.log("Senha Valida")
        senhaValida = true;
    }else {
        console.log("Senha Invalida")
    }
}while(!senhaValida)


 //1-Crie um programa que peça 5 nomes diferentes e imprima na tela logo após o nome ser informado.
 
//for(let i = 0; i <= 5; i++){
//    const nome = readline.question("Informe um nome: ");
//    console.log(nome);
//}

//2-Crie um programa que executa 10 vezes um bloco de código, onde é solicitado um valor numérico inteiro. 
//Caso o valor informado seja impar, imprima impar no console, caso seja par, imprima par no console.


//for (let i = 0;i <=10; i++){
//    const numero = readline.questionInt("Informe um numero: ");
//    numero2 = numero % 2 
//    if (numero2 == 0 ){
        
//       console.log("Par:" );
//  } else{
        
//    console.log("Impar:" );
//  }
    
    
//  }

//3-Imprima a tabuada de um número informado usando o while.

//obter um numero

//const numeroTabuada = readline.questionInt("Informe um numero inteiro para mostrar a tabuada: "); 

//criar uma variavel de controle para o while
//let vez = 1;

//criar o while 

//while(vez <= 10){
//    const resultado = vez * numeroTabuada;
//    console.log(`${numeroTabuada} X ${vez} = ${resultado}`);
//    vez ++;
//}
//4-Imprima todos os valores impares entre 1 e 100 usando for;
//for (let i =1; i <= 100; i++ ){
//    if (i % 2 > 0){
//        console.log(i)
//    }
//}


