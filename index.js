import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.yellow.bold('WELLCOME TO WORD COUNTER'));
let start = await inquirer.prompt([{
        message: chalk.green.bold('ENTER SENTENCE FOR COUNTING A WORDS'),
        type: "input",
        name: 'value'
    }]);
let words = start.value.split(" ");
console.log(words);
let counter = words.length;
console.log(chalk.red.bold(`THE TOTTAL WORDS IN THIS SENTENSE IS ${counter}`));
