const user={
    firsname:'james',
    lastname:'bond',
    profile:{
        age:40,
        nickname:'007'
    }
}

const fun = obj => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const newObj = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      newObj[key] = fun(obj[key]);
    }
  
    return newObj;
  };

console.log(fun(user))