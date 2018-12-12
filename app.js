console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')


const res = notes.add(15,12);
console.log(res);
// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
