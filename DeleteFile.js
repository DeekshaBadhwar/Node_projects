var fs=require('fs')
fs.unlinkSync('Hello.txt',function(err){
    if(err) throw err;
    console.log('File deleted')
})