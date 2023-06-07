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

//for(let i = 0; i < lista.length; i++){

    //console.log(lista[i])
//}

//lista.forEach((objeto) => console.log(objeto))

let soma =0;

const somaIdade = (objeto) =>{
    soma+= objeto.idade
}

lista.forEach(somaIdade)
   

console.log('Soma: ',soma)
