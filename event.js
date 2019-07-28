const events=require('events');
let emitter=new events.EventEmitter();
emitter.on('newEvent',(message)=>
{
    console.log(`message: ${message}`);
});
emitter.emit('newEvent','subham');
// we can also do this
/*
var EventEmitter=require('events').EventEmitter;
EventEmitter.on('newEvent',(message)=>
{
    console.log(`message: ${message}`);
});
emitter.emit('newEvent','subham');*/