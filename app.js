// 1. declaração - const para o que não muda, let para o que muda
const nome = "Ana";	// string
const idade = 25;	// number
const altura = 1.68;	// number (decimal também é number)
const estudante = true; // boolean
let cidade = "São Paulo"; // let: vai mudar mais adiante

// 2. interação via template literal
console.log(`Olá, ${nome}! Você tem ${idade} anos e mede ${altura}m.`);

// 3. tipo á vista
console.log(typeof estudante);

// 4. múltiplos argumentos + expressãoa
console.log("Ano que vem:", idade + 1, "anos");

// 5. reatribuição (por isso o let)
cidade = "Rio de Janeiro";
console.log(`Agora mora em ${cidade}.`);
