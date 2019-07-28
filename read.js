var  readline=require('readline');
var util=require('util')
var rl=readline.createInterface(process.stdin,process.stdout);

rl.question('what is your name ' , (name)=>{

    rl.setPrompt(`${name} how old are you `);
    rl.prompt();
    rl.on('line', (age)=>{
        if(age<18)
        {
            util.log(`hello ${name} you are less than 18`);
        }
        else{
            util.log(`hello ${name} you are greater than 18`);
        }
rl.close();
    });
});