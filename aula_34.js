const lista = [
    {
        nome: 'José',
        idade: 13,
        cartoes : ['3244', '5435']

    }, 
    {
        nome: 'João',
        idade: 42,
        cartoes : ['376764', '5324535']

        
    },
     {
        nome: 'Maria',
        idade: 23,
        cartoes : ['3212314', '545353']

        
    },
    {
        nome: 'Gabriela',
        idade: 25,
        cartoes : ['353534', '54123']

        
    },
    {
        nome: 'Fernanda',
        idade: 65,
        cartoes : ['332344', '51235']

        
    }
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log (cartoes)