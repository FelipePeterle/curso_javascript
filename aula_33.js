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

const resultadoSome = lista.some((objeto) => objeto.idade > 50);

console.log ('Resultado',resultadoSome)

const resultadoEvery = lista.every((objeto) => objeto.idade >= 10);
console.log ('Resultado',resultadoEvery)