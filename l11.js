const fs = require('node:fs');
const readline = require('node:readline');

const terminal = readline.createInterface( {
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Как тебя зовут??", (data) => {
  console.log(data); 
}); 

// Остановился на 11 уроке 57.24