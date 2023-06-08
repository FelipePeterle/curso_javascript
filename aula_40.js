const qualquer = {
    abc: "fdasd",
    dca: 'asjdsaj',
    ffg: 'daskjdkas',
}


const novoQualquer = {
    ...qualquer,
    final: 'FINAL'
}

const lista = [54,623,632,32,32,12312,123];
const lista2 = [12323,43434343,434343,4343,12,123,4556,123213];


//console.log(novoQualquer)

console.log(lista);
console.log(lista2);

const listaJunta = [
    ...lista,...lista2
]

console.log(listaJunta);