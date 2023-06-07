
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

const ConverterObjeto = (objeto) => {

    return{
        ...objeto,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map(ConverterObjeto));