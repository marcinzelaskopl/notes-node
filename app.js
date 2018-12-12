console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')


console.log('Result is', notes.add(20,11));
// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
