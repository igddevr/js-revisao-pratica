//1. Filtrar lista de usuários com idade maior que 18 anos e retornar um array apenas com as idades desses usuários.
// Conceitos aplicados: método filter, map, arrow function e desestruturação de objetos.

const usuarios = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 17 },
  { nome: 'Pedro', idade: 30 },
  { nome: 'Ana', idade: 15 }
];

const usuariosMaioresDeIdade = usuarios.filter(({ idade }) => idade > 18);

const idades = usuariosMaioresDeIdade.map(({ idade }) => idade);

console.log(idades);

//2.Retorne apenas os produtos que tem o preço maior que R$50,00.

const produtos = [
    { nome: 'Laptop', preco: 1299.99 },
    { nome: 'Abajur', preco: 49.90 },
    { nome: 'Estante', preco: 269.00 },
    { nome: 'Jogo de Facas', preco: 79.50 }
]

const produtosCaros = produtos.filter(produto => produto.preco > 50);

console.log(produtos, produtosCaros);

//3. Trabalhando com objetos: Exiba na tela os valores de um objeto
const pessoa = {
    nome: 'Carlos',
    idade: 28,
    profissao: 'Engenheiro'
}
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`);

//4. Somando itens com reduce: Calculando a soma de valores de objetos usando o método reduce.

const carrinho = [
    {produto: 'Bola', preco: 29.90},
    {produto: 'Lápis', preco: 6.90},
    {produto: 'Caderno', preco: 39.90}
];

const total = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0)

console.log(total)

//5. Desestruturação de Objetos com Valores Padrão e Rest Operator: Extraindo valores de um objeto, atribuindo valores padrão e coletando o restante dos dados.

const usuario = {
    nome: 'Valter', idade: 27
}

const { nome } = usuario
const { idade } = usuario
const { nome, idade, cidade = 'Desconhecida', ...resto } = usuario

const novoUsuario = {
    nome, cidade, ...resto
}

console.log(novoUsuario)

//6. Promises e Async/Await: Criando uma função assíncrona que simula uma operação de restaurante pizzaria utilizando Promise e Async/Await

const deliverPizza = () => {
  // Criamos uma promessa (Promise)
  return new Promise((resolve) => {
    console.log("Pedido da pizza sendo enviado para a cozinha...");
    
    setTimeout(() => {
      resolve("Pizza pronta!"); // A promessa foi cumprida!
    }, 3000); //intervalo de tempo de 3 segundos.
  });
};

const makeOrder = async () => {
  // O 'await' espera a promessa ser resolvida
  const pizzaMessage = await deliverPizza(); 
  console.log(pizzaMessage);
};

makeOrder();

//7. Try/Catch: Criando uma função que simula um processo de pedido em uma pizzaria lidar com erros.

const deliverPizza = () => {
    return new Promise((resolve, reject) => {
        console.log("Pedido da pizza sendo enviado para a cozinha...");

        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // Simula sucesso ou falha aleatória em 50%
            if (sucesso) {
                resolve("Pizza pronta!"); // A promessa foi cumprida!
            } else {
                reject("Ocorreu um erro na cozinha. Tente novamente."); // A promessa foi rejeitada!
            }
    });
})};

const makeOrder = async () => {
    try {
        const pizzaMessage = await deliverPizza(); 
        console.log(pizzaMessage);
    } catch (error) {
        console.error(error); // Lida com o erro caso a promessa seja rejeitada
    } finally {
        console.log("Obrigado por pedir conosco!"); // Este bloco será executado independentemente do sucesso ou falha
    }
};

makeOrder();