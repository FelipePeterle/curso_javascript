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

//onst pessoa = {
    //jose:{
        //idade:54,

        // },
        //joao:{
            //idade:45,
            // },
            // maria: {
                //idade: 70,
                //  }
                //}


const funcaoReduce = (acc,objeto ) =>{
    return{
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}


const pessoas = lista.reduce(funcaoReduce, {
    Julio:{
        idade: 60
    }
});


const pessoasArray = lista.reduce((acc,objeto) =>{
    acc.push(objeto.idade)
    return acc;
},[]);

console.log(pessoas);
console.log(pessoas.Fernanda.idade);
console.log(pessoasArray);