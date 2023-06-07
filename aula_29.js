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


const buscarPessoa = (pessoa) => pessoa.nome === "José";

const novaPessoa = lista.find(buscarPessoa)


console.log(novaPessoa);