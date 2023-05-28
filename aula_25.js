const jose = {
    idade : 35,
    peso: 80,
    nome:'José',
    genero:'Masculino',
    nacionalidade:'Brasileiro',
    endereco : 'Rua Quatro',
    numero: 1200,
    pais: 'Brasil',
    temFilhos:true,
}

const exibirInformacoes = (pessoa, qualInformacao) =>{
    console.log(`${qualInformacao} do (a) ${pessoa.nome}: `, pessoa[qualInformacao])
}

exibirInformacoes(jose, 'numero');