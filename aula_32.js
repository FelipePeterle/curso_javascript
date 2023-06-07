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

lista.sort((a,b) =>{
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }
    

    if (a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }
    return 0;
})

console.log(lista)