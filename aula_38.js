//Object.defineProperties (várias propriedades)
//Object.defineProperty (Apenas uma propriedade)

const propriedadePadrão = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se estiver true => usuario.nome = 'Novo nome'
    configurable : false, // se estiver true => posso deletar o nome
    enumerable: true, // se estiver true => ele será exibido no objeto
})



class Usuario {
    

    constructor(email, senha, nome){
        Object.defineProperties(this,{
            nome: propriedadePadrão(nome),
            senha: propriedadePadrão(senha),
            email: propriedadePadrão(email),

        })


        Object.defineProperty(this, 'nome',{
            value: nome,
            writable: false, // se estiver true => usuario.nome = 'Novo nome'
            configurable : false, // se estiver true => posso deletar o nome
            enumerable: true, // se estiver true => ele será exibido no objeto
        })
    }
}

const usuario = new Usuario('emails','senhas','nomes');

console.log(usuario)