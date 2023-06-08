class Usuario {
    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => {
                    nome = value;
                }
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('A senha precisa ter pelo menos 4 caracteres');
                    }
                    senha = value;
                }
            },
            email: {
                get: () => email,
                set: (value) => {
                    email = value;
                }
            }
        });
    }
    getEmail(){
        return this.email
    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');
usuario.senha = 'ajdsdsd'

console.log(usuario.getEmail());
