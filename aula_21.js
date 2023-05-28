const test1 = (callback) =>{
    setTimeout(()=>{
        console.log('Test1');

    }, 200)

    
}

const test2 = (callback) =>{

    setTimeout(()=>{
        console.log('Test2');
        callback()

    }, 600)

}

const test3 = (callback) =>{

    setTimeout(()=>{
        console.log('Test3');

    }, 300)

}

const test4 = (callback) =>{

    setTimeout(()=>{
        console.log('Test4');

    }, 1)



}

const funcaoCallback = () =>{
    console.log('Salvou o usuário')

}

test1()
console.log (1+1)
test2(funcaoCallback)
test3()
console.log(2+2)
test4()