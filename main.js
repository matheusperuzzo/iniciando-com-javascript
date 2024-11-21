// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
(function () {
  const num1 = 2;
  const num2 = 2;

  console.log(num1 + num2);
})();

// Crie um script que declare uma variável e verifique se o seu valor é um número.
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
(function () {
  let rand = Math.floor(Math.random() * 10);

  if (rand > 5) {
    rand = rand.toString();
  }

  console.log(typeof rand === "number" ? "É um número!" : "Não é um número!");
})();

// Crie um script que declare uma variável e verifique se o seu valor é uma string.
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
(function () {
  let rand = Math.floor(Math.random() * 10);

  if (rand > 5) {
    rand = rand.toString();
  }

  console.log(typeof rand === "string" ? "É uma string!" : "Não é uma string!");
})();

// Crie um script que declare uma variável e verifique se o seu valor é um booleano.
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
(function () {
  let bool = true;

  console.log(
    typeof bool === "boolean" ? "É um booleano!" : "Não é um booleano!"
  );
})();

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
(function () {
  const num1 = 10;
  const num2 = 5;

  console.log(num1 - num2);
})();

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
(function () {
  const num1 = 2;
  const num2 = 3;

  console.log(num1 * num2);
})();

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
(function () {
  const num1 = 20;
  const num2 = 4;

  console.log(num1 / num2);
})();

// Crie um script que declare uma variável e verifique se o seu valor é um número par.
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
(function () {
  const rand = Math.floor(Math.random() * 100);

  console.log(rand % 2 === 0 ? "É um número par!" : "Não é um número par!");
})();

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
(function () {
  const rand = Math.floor(Math.random() * 100);

  console.log(rand % 2 !== 0 ? "É um número ímpar!" : "Não é um número ímpar!");
})();
