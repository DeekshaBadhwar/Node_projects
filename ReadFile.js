var fs= require('fs')
fs.readFile('CreateFile.txt',(err,data)=>{
    if(err) throw err;
    console.log(data);
})