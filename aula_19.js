function calcular(){
    console.log('calcular');
    console.log(arguments);

}

const calcular2 = function(){
    console.log('calcular2')
    return 32323;
}

const calcular3 = (funcao) =>{
    console.log('calcular3')
    return funcao()
}

console.log('resultado', calcular3(calcular2));



