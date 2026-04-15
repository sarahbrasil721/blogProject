// 1 - arrays
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, [1, 2, 3]];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];
//basicamente cada item no array tem uma numeração e começa sempre do zero.

console.log(arr[0]);
//acessa a letra "a"
console.log(arr[3]);
//acessa a letra "d"
console.log(arr[4]);
//acessa a letra "e"

// 3 - propriedades

const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);
//da na mesma, diz o numero de itens do array atraves da sua variavel

const myName = "Matheus";

console.log(myName.length);
//numero de caracteres do valor que esta na variavel

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto"

console.log(text.toUpperCase());
console.log(text.indexOf("g"));
//indexOf passa o numero da letra 



// 5 - objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "programador",
};

console.log(person);
console.log(person.job);
console.log(person.job.length);
console.log(typeof person);



// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW", 
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
//passando os itens de um para o outro (mas o obj se mantem da mesma forma)
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c:[],
};

Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);


// 8 - conhecendo melhor os objetos
// voce recebe as chaves que há no objeto pedido.
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));
//é entregue nome da propriedade e valor

//9 - mutação 

const a = {
    name: "Matheus",
};

const b = a;
//juntou os dois
console.log(a)
console.log(b)

console.log(a === b)
//agora os dois são exatamente iguais
a.age = 31;

console.log(a)
console.log(b)

delete b.age;

console.log(a)
console.log(b)
//não pode ser bom em todos os casos pq quando voce adiciona em um, voce adiciona em outro e quando voce deleta em um, deleta no outro tambem.

// 10 - loop em array 
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
} //o uso de length ajuda quando se trata do tamanho do array e quando ele deve terminar (independente do tamanho). acessar o array pelo indice deixa dinamico tambem. pode ter uma grande quantidade de itens.

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");
//coloca o elemento no array
console.log(array);
console.log(array.length);

array.pop();
//remove o ultimo elemento colocado no array(nesse caso não teve instrução de qual exatamente deveria tirar, então acredito que 
// ele entendeu sozinho que deveria tirar o ultimo colocado)
console.log(array)
console.log(array.length)

array.push("z", "x", "y");
//é possivel inserir varios itens no array com o uso do push
console.log(array);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);
// as vezes é necessario fazer algo com o elemento removido, então é possivel retornar ele com o pop.


// 12 - shif e unshift
// ao contrario de pop e push, temos o shif e unshift; o método shift remove o primeiro elemento do array
// já o método unshift adiciona itens ao inicio do array


const letters = ["a", "b", "c"];
const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("v", "g", "i", "l");

console.log(letters);

//13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

//varios metodos quando nao encontram resultado, retornam -1, ex:
console.log(myElements.indexOf("Mamão"));



// 14 - slice 
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
//a intenção é retornar o "c", "d" e "e"

console.log(subArray);
console.log(testeSlice);
//não modifica array original
const subArray2 = testeSlice.slice(2, 4 + 1);
//não retornou as exatas letras entao foi pedido para retornar o que foi pedido na primeira subarray.


const subArray3 = testeSlice.slice(10, 20);
//foi pedido para retornar elementos que não existem. Retornou como uma lista vazia.

console.log(subArray3);

const subArray4 = testeSlice.slice(2);
//todos os elementos a partir do indice 2
console.log(subArray4);



// 15 - forEach
//o forEach é como uma estrutura for ou while, porém é um método; Ele percorre cada um dos elementos do array;

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

// ex 2

const posts = [
    { title:"Primeiro post", category: "PHP" },
    { title:"Segundo post", category: "Javascript" },
    { title:"Terceiro post", category: "Pyhton" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});


// 16 - includes
// O método includes verifica se o array tem um elemento; Utilizamos no array e como argumento colocamos o elemento que buscamos;

const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("BMW"))
//ele retorna um valor booleano afirmando se existe ou não existe aquele valor no array.
console.log(brands.includes("KIA"))
//não existe no array, então retorna false.

//tambem tem a opção de colocar uma mensagem junto do retorno, ao invés de ser apenas true ou false.
if (brands.includes("VW")) {
    console.log("Há carros da marca VW!")
}

// 17 - reverse
// O método reverse inverte os elementos de um array; Este método modifica o array original.

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);
//array original modificado.


// 18 - métodos de string
//strings também são objetos, ou seja, tem métodos e propriedades; Alguns semelhantes aos de array
//Note que voce pode utilizar length em uma string ou em um array; e tambem acessar cada caractere pelo seu indice

//19 - trim
// o trim remove tudo que não é texto em uma string; como: caracteres especiais e espaços em branco;
// Um método interessante para utilizar em sanitização de dados; O método não modifica o texto original;

const trimTest = "  testando \n  "

console.log(trimTest);
console.log(trimTest.trim());
//basicamente retornou o texto original sem modificações alem da correção de espaçamento.

console.log(trimTest.length)
console.log(trimTest.trim().length)


//20 - padStart
// O método padStart insere um texto no começo da string; O texto pode ser repetido de acordo com o segundo argumento no método, ele determina o máximo de caracteres do texto alvo;

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

//agora tem o padEnd, que coloca no final 

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);


// 21 - split
// o split divide uma string em um array; cada elemento será determinado por um separador em comum;
// os mais utilizados, são: ponto e virgula, virgula, espaço;

const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 22 - join
//  já o join une um array em uma string; podemos colocar um separador também, para formatar a string;

const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);


// 23 - repeat
// o método repeat repete um texto n vezes; onde "n" é o numero que colocamos como seu argumento;

const palavra = "Testando ";

console.log(palavra.repeat(5));

// 24 - rest operator / rest parameters
// rest operator é caracterizado pelo simbolo ... ; podemos utiliza-lo para receber indefinidos argumentos em uma função;
// assim não é necessario declarar exatamente o que vamos receber, deixando a função mais ampla;

const somaInfinita = (...args) => {
    //aceitando argumentos infinitos (args é o nome dos argumentos)
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i]
        //somou o total com cada um dos argumentos
    }

    return total;
    //retorna a soma toda
};

console.log(somaInfinita(1, 2, 3));
//são argumentos infinitos sendo somados entre si
console.log(somaInfinita(231123121, 2312313212, 3213213, 990482940, 493849204, 39280423));


// 25 - estrutura de repetição for...of
// o for...of é uma estrutura de repetição semelhante ao for, porém mais simples; O numero de repetição é baseado no array utilizado;
// e podemos nos referir aos elementos sem precisar acessar o indice deles;

const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(somaInfinita2(1, 2, 3))
console.log(somaInfinita2(1, 2, 3, 22, 89))

// 26 - destructuring em objetos
//o destructuring é uma funcionalidade que nos permite desestruturar algum dado; no caso de objetos, é possivel criar variaveis a partir de suas propriedades, com uma simples sintaxe;
const userDetails = {
    firstName: "Sarah",
    lastName: "Brasil",
    job: "Programadora",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

//renomear variaveis 
const { firstName: primeiroNome } = userDetails;
console.log(firstName);


// 27 - destructuring em arrays 
// o destructuring tambem pode ser utilizado para desestruturar um array em variaveis; A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves;

const myList = ["Avião", "Submarino", "Carro"];
const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);


// 28 - JSON
const myJson = '{"name": "Sarah", "age": 21, "skills":["PHP", "Javascript", "Pyhton"]}';

console.log(myJson);
console.log(typeof myJson);


//29 - JSON para objeto e objeto para JSON
// na maioria das vezes vamos precisar converter objetos para JSON; ou um JSON para um objeto JavaScript válido; utillizamos o objeto JSON e os métodos stringify e parse;

const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// adicionando um novo elemento

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);