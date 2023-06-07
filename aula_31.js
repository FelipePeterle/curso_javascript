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


const funcaoReduce = (acc,objeto ) =>{
    return{
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas)

const listaDevolta = chaves.map((chave) => 
({ 
    nome: chave, 
    idade: pessoas[chave].idade
}))

//console.log(pessoas);

//console.log(chaves);

console.log(listaDevolta);




