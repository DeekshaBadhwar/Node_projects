const promiseObj1= new Promise((res,rej)=>{
    let req=false
    if (req===true){
        res("Request successfully")
    }
    else{
        rej("request rejected")
    }
}).then(
    (value)=>{console.log(value)},
).catch(
    (error)=>{console.log(error)}
)
//Eample2
const promiseObj2=new Promise((res,rej)=>{
    let num=10;
    res(num)
}).then(
    (value)=>{
        console.log(value)
        return value+1
    }
).then(
    (value)=>{
        console.log(value)
    }
)


///Example3
const getName=(name)=>{
return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(name);
        },2000)
})
}
const getHobbies=(name)=>{
    return new Promise((res,rej)=>{
        res(['crrr','eating','singing'])
    })
}
getName('sonam').then(nm=>getHobbies(nm))
.then(hobby=>{console.log(hobby)})
.catch((error)=>{console.log(error)})
