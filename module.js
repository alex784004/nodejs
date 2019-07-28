/*console.log(module);
module.exports.title='NODE';
module.exports.title2='NODE3';
*/

module.exports.cal=function(){
    console.log('hello');
}
console.log(module.exports.cal(100,233));

var object=require('./lib');
console.log(object.cal(100,233));

