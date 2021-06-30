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
  async function showHobby(){
        const nm =await getName('sonam')
        const hobby= await getHobbies(nm)      
        console.log(nm,"has","these hobbies",hobby)
    
    }
    showHobby()