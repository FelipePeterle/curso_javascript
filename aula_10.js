const CONSUMO_AUTOMOVEL = 12;



function gastocombustivel(tempogasto, velocidademedia){

    const distancia = velocidademedia * tempogasto;

    const consumoFinal = distancia/ CONSUMO_AUTOMOVEL;

    return consumoFinal.toFixed(3);

}

console.log(gastocombustivel(10,85))
console.log(gastocombustivel(2,92))
console.log(gastocombustivel(22, 67))
