const lista = [
    {
        nome: 'José',
        idade: 13

    }, 
    {
        nome: 'João',
        idade: 42
        
    },
     {
        nome: 'Maria',
        idade: 23
        
    },
    {
        nome: 'Gabriela',
        idade: 25
        
    },
    {
        nome: 'Fernanda',
        idade: 65
        
    }
]

const filtrarpessoa = (pessoa) => pessoa.idade > 30;

const listaFiltrada = lista.filter(filtrarpessoa);


console.log(lista)

console.log(listaFiltrada)