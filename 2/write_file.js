const fs=require('fs');
fs.writeFile('data.html','hello this iis file is created and written using nodejs code \n','utf-8',(err)=>
	{
		if(err) return err;
		console.log('the file has been saved');
	});

fs.appendFile('data.html','hello this iis file is created and written using nodejs code','utf-8',(err)=>
	{
		if(err) return err;
		console.log('the file has been saved');
	});
