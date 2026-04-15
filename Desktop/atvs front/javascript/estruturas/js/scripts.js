// variáveis

let nome = "Sarah";

console.log(nome);

nome = "sarah brasil";

console.log(nome);

// é possivel mudar o valor do let
//const não se muda o valor / const = constante

const idade = 31;

console.log(idade);

//2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"
//esses simbolos não podem ser utilizados em variaveis

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "mariazinha da silva";
const nomeCompleto = "cleide souza";

console.log(nomeCompleto);
console.log(nomecompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste)


// 3 - prompt
// a função prompt recebe um dado do usuário, podemos salvar esse valor em uma variável

//const age = prompt("Digite sua idade:");
//console.log(`Você tem ${age} anos.`);

// 4 - alert
//alert("Testando");


//5 - math.x

//math é um objeto, que possui diversas funções para fins matematicos;

console.log(Math.max(5, 2, 1, 10)); //encontra o maior numero
console.log(Math.floor(5.14)); //arredonda pra baixo
console.log(Math.ceil(5.14)); // arredonda pra cima

// 6 - console

//console.error("erro!")

// 7 - if
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("bem-viado, João!")
}

// só é executada se a condição for verdadeira

//8 - else 
const loggedIn = false

if (loggedIn) {
    console.log("Está autenticado");
} else {
    console.log("Não está autenticado!")
} // vai contar como não autenticado pois o valor da variavel é false e o if é ignorado por ser true.

const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log("Número mais altos")
} else {
    console.log("Os números não são mais altos")
} // vai executar o else por uma das variaveis do if ter o valor false. O true é sempre executado.


//9 - else if 
if (1 > 2){
    console.log("teste");
} else if (2 > 3) {
    console.log("teste 2");
} else if (5 > 1) {
    console.log("agora sim!");
}

const userName = "Alice";
const userAge = 20;

if(userName === "Alice" && userAge === 20) {
    console.log("Bem-Vinda, Alice! Eu sei que você tem 20 anos." );
} else if (userName === "Mathias" && userAge === 21) {
    console.log("Olá Mathias!")
} else {
    console.log("nenhuma condição aceita!")
} //podem existir varias condições, mas quando a verdadeira é encontrada, é executada e assim é finalizada a operação.


// 10 - while

let p = 0;

while (p < 6) {
    console.log(`Repetindo ${p}`);
    p = p + 1; // -> incrementador; o valor de p vai ficar salvo em todas as iterações
}

let o = 10;

do {
    console.log(`valor de o: ${o}`);
    o-- 
} while (o > 1);

//11 - for 
// o for é a estrutura de repetição mais utilizada; ela condensa toda a lógica em uma linha / na primeira declaração, colocamos: incrementador, condição final e progressão;

for (let t=0; t < 10; t++) {
    console.log(`repetindo algo`)
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`)
}

// 13 - identação - organização do código
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if (g === 15) {
        console.log("O g é 15!")
        break;
    }
}

// 15 - continue; faz com que o proximo item apareça, pulando a execução de um loop

for(let s = 0; s < 10; s = s + 1) {
    //operador de resto = %
    if(s % 2 === 0){
        console.log("Número par")
        continue;
    }
    
    console.log(s);
}

// 16 - switch
const job = "asd";

switch (job) {
    case "Programador":
        console.log("você é um programador");
        break;
    case "Advogado":
        console.log("você é um Advogado");
        break;
    case "Engenheiro":
        console.log("você é um Engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}