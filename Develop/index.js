const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions 
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What\'s your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your e-mail address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What\'s your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, briefly describe your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does this project have one of the following licences?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command line would you like to use to install packages and their dependencies for this project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command line would you like to use to run tests for this project?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If possible, How to contribute to this application?'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Your README.md file has been successfully generated!`)
    );
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);
        writeToFile('README.md', data);
    })
}

// function call to initialize
init();