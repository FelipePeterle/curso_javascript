class Usuario{
    email;
    senha;
    nome;

    constructor(email,senha,nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario {
    permissoes;

    constructor(email,senha,nome,permissoes){
        super(email,senha,nome);
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;

}

const admin = new Administrador('Email@email.com', 'senha','Jose',[1,6])
const comprador = new Comprador();
comprador.senha = 'Nova Senha';

console.log(comprador)