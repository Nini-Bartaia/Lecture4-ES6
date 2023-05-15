const user={
    banks:[

       {},
       {},
        {
            address:{
                city:'London'
            }
        }
    ]
}

const fun=(user)=>{
    const {banks:[,,{address:{city}}]}= user
    return city

}

console.log(fun(user))