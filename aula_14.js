const mensagem = 'qualquer coisa';
const mensagem2 = 'outra coisa'

console.log('tamanho',mensagem.length)
console.log('concatenar',mensagem.concat( mensagem2))
console.log('concatenar',mensagem+mensagem2)
//console.log('concatenar',´teste ${mensagem} ${mensagem2}´);
console.log('',mensagem.substring(5))
console.log(mensagem.substring(5,2))
console.log('Quebrar um array', mensagem.split(' '))
console.log('Passar para maísculo',mensagem.toUpperCase())
console.log('Passar para maísculo',mensagem.toLowerCase())
console.log('Replace',mensagem.replace('qualquer coisa', 'Felipe'))