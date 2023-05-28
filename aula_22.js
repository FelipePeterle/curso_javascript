const sleep = async(ms) =>{

    return new Promise(resolve => setTimeout(resolve,ms))
}


const aguardarcomretorno = async () =>{
    await sleep(3000);
    return 30;

}

const aguardar = async () =>{
    console.log('Passou ', 2 ** 2)
    const resultado = await aguardarcomretorno();
    console.log('resultado',resultado);
    console.log('Passou ', 3 ** 3)
    console.log('Passou ', 4 ** 4)
    console.log('Passou ', 9 ** 9)
    console.log('Passou ', 1 ** 1)

}

aguardar();