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


 



for(let i = 0; i <= 5; i++){
    const nome = readline.question("Informe um nome: ");
    console.log(nome);
}