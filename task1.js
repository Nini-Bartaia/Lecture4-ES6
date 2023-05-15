const fun=(...args)=>{

    const arr=[]
    let product=1

   
    if(args.length<2){
        throw new Error('Parameter must be greater than 2')
    }

    arr[0]=args[0]+args[1]

    for(let i=args[2]; i<=args.length;i++){

        product=product*i

       
        arr[1]=product
    }

    return arr

}

console.log(fun(1,2,3,4,5))