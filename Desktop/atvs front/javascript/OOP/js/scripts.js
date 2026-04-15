// 1 - métodos
// Métodos podem ser adidcionados aos objetos; eles são como propriedades, mas contém uma função;
// Invocamos os métodos do mesmo modo que funções;

const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
};

console.log(animal.nome);
animal.latir();
//foi executado o método que está dentro do objeto.


//Aprofundando em métodos
// Os métodos são utilizados para interagir também com as propriedades do seu objeto; Podemos exibir elas ou modifica-las;
//Podemos nos referenciar com o próprio objeto com a palavra reservada this;

const pessoa = {
    nome: "Matheus", 

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },//modificando nome via método
};

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Joana");
console.log(pessoa.getNome())
//modificação do nome


// 3 - prototype
// O recurso fundamental do prototype que temos que entender é o fallback; quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral;
//Ou seja, é por isso que temos acesso a length em strings, por exemplo;
const text = "asd";

console.log(Object.getPrototypeOf(text));
const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.lenght);
console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype
// quando criamos um objeto a partir de outro, este outro será o prototype do objeto criado;
//porem tambem herdará as caracteristicas do objeto pai, se for um objeto, herda de Object; Esta é a cadeia do prototype;

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - Classes basicas
// Os prototypes são originados de uma Classe; Que é o molde dos objetos, nela definimos os métodos e propriedades;
//JavaScript ja possui suas classes, porém podemos criar as nossas;
// isso é essencial para a Orientação a Objetos
//voce tem uma classe e a partir dela voce cria/instancia outros objetos


const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
//criando o objeto a partir do cachorro

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao)
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";

console.log(bulldog)

//testando

console.log(cachorro)
//aparece null


// 6 - função como classe - função construtora
// Utilizando funções como classes, conseguimos iniciar as propriedades com a criação do objeto;
// Chamamos de função construtora este recurso; O construtor tem como objetivo instanciar um objeto, ou seja, criar um novo objeto;

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob)

const jack = criarCachorro("Jack", "Poodle");
console.log(jack)

// 7 - Classes baseadas em funções
// Este recurso é semelhante ao anterior, mas com uma nova palavra chave: new;
// em varias linguagens o new é utilizado para instanciar novos objetos, em JS isso tambem acontece; e eles podem partir de funções;

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky)

// 8 - Classes de função com métodos
// para adicionar métodos antes da criação do objeto, podemos acessar o prototype e colocá-los lá;
// Esta é basicamente a essência de JavaScript; Porém com a evolução da linguagem, outros recursos foram criados, é o que veremos nas próximas aulas;

Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuu!");
};

husky.uivar();


// 9 - Classes ES6
//Nas versões mais atuais de JS abandonamos as functions e utilizamos as classes;
//Aqui temos recursos comuns em outras linguagens; como o constructor; alem da instancia por new;
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador");

console.log(jeff)