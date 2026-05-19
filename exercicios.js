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
