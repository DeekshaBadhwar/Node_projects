var fs= require('fs')
fs.rename('Hello.txt','Hello.txt',(err)=>{
    if(err) console.log(err) 
    else{
console.log("renames file succesfully")}
})