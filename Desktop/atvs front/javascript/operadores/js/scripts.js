// 1 - number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -139);

// 2 - operações aritméticas
console.log(2+5);
console.log(10 - 5);
console.log(10 / 5);
console.log(5 * 5);

// 3 - special numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// 4 - Strings

console.log("um texto");
console.log(`mais um texto`);
console.log(`13`);
console.log( typeof "um texto");


// 5 - símbolos especiais em string
console.log("testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - concatenação
console.log("Oi, " + "suave?");

//7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8 - Boolean / 9 - comparações
console.log(true);
console.log(5 > 20)
console.log(30 > 10)

console.log(5 <= 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(5 == 5);


// 10 - idêntico

console.log(9 == "9");
console.log(9 === "9");

// 11 - Operadores lógicos 
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Matheus" === 1);
console.log(5 > 2 || "Matheus" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);
