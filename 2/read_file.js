var fs=require('fs');
fs.readdir('./',(err,content)=>
{
if(err)return err;
console.log(content);
});  //this is a way to read the content of the folder 
fs.readFile('read_file.js','utf-8',((err,content)=>
{
if(err)return err;
console.log(content);
})); // this code is to read the content of the file
