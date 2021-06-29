var fs=require('fs')
fs.writeFile('Createfile.txt','hello  there , I have completed this task',(err)=>{
    if(err)  throw err;
    console.log('File is Created Sucessfully')
})