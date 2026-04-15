// 1 - criando uma função

function minhaFuncao() {
    console.log("testando");
}

//para que apareça de fato no console, é necessário invocar a função

minhaFuncao();
minhaFuncao();

//para maior constancia no código, é possivel criar a função em variavel;

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
};

minhaFuncaoEmVariavel();

//função com parametro

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");

// tem como reaproveitar a função e adicionar outro valor; sairá outro resultado

funcaoComParametro("Outra função");

// 2 - return
// retornando valores, exibindo e/ou salvando ele.

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, c);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo da função
// o que está dentro de uma função, não é alterado por um valor que está fora dela; as alterações feitas dentro
// do escopo, ficam dentro do escopo

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();


// 4 - escopo aninhado
let m = 10
//valor global (fora da função) que será preservado

function escopoAninhado() {
    let m = 20
    // aqui temos mais um valor que será preservado
    
    if (true) {
        let m = 30
        // mais um valor que será preservado

        if (true) {
            let m = 40
            //outro valor preservado
            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado();

console.log(m);


// 5 - arrow function
//a palavra function é substituida pela flecha, assim como diz no proprio nome; a estrutura não muda muito num todo.
const testeArrow = () => {
    console.log("Esta é uma arrow function")
};

testeArrow();


const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }

    console.log("Impar");
}

parOuImpar(5);
parOuImpar(10);


// 6 - mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4));



const raizQuadrada2 = (x) => x * x;
//forma resumida de se utilizar arrow function; tudo numa linha só

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

//+ exemplos

const helloWorld = () => console.log("Hello World");

helloWorld();


// 7 - parametro opcional

//os argumentos/parametros nas funções são obrigatórios, precisamos passar todos; porém há casos
//de funções que podem funcionar sem algum dos argumentos; para resolver isso podemos fazer uma checagem do parametro
//com um if

const multiplication = function (m, n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};

console.log(multiplication(5));
console.log(multiplication(2, 4));


const greeting = (name) => {
    if (!name) {
        console.log("Olá");
        return;
    }

    console.log(`Olá ${name}!`);
};

greeting();

greeting("Matheus");

//8 - valor default 

//neste caso, "Olá" é o valor default.
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Matheus"));
console.log(customGreeting("João", "Bom dia"));

// mais exemplos

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("testando");
repeatText("testando com mais vezes", 10);

//o valor default é 2, e pode ser modificado como é visto na chamada da função


// 9 - closure

// é um conjunto de funções, onde temos um reaproveitamento do escopo interno de uma função;
// pois este escopo não pode ser acessado fora da função, já que é um bloco;
// então há funções internas que aproveitam o escopo, e são chamadas de closure;

function someFunction() {
    let txt = "alguma coisa";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();


// 10 - mais sobre closure
// as closures também podem servir para salvar os resultados já executados;
//criando uma espécie de incrementação;
// assim temos uma variável que executa uma função e modifica seu valor;

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// 11 - recursion

// Um recurso que permite a função se autoinvocar continuamente;
//Criamos uma espécie de loop; é interessante definir uma condição final para parar a execução;

const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de funcionar!");
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 10)


//outro exemplo

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial (x - 1);
    }
}

const num = 6;
const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);