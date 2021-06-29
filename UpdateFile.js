var fs=require('fs')
fs.appendFile('CreateFile.txt','Here please Update the file',(err)=>{
    if(err) throw err;
    console.log('Upadation is done')
})