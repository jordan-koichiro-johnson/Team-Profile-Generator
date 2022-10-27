const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const generateHTML = require('./util/generateHtml')
const fs = require('fs')
let team = []

function engineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "Please input the engineer's name"
        },
        {
            name: "engineerID",
            type: "input",
            message: "Please input the engineer's ID"
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "Please input the engineer's email"
        },
        {
            name: "github",
            type: "input",
            message: "Please input the engineer's github"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github)
        team.push(engineer)
        addEmployee()
    })
}

function intern(){
    inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "Please input the intern's name"
        },
        {
            name: "internID",
            type: "input",
            message: "Please input the intern's ID"
        },
        {
            name: "internEmail",
            type: "input",
            message: "Please input the intern's email"
        },
        {
            name: "school",
            type: "input",
            message: "Please input the intern's school"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school)
        team.push(intern)
        addEmployee()
    })
}


function addEmployee(){
    inquirer.prompt([
        {
            name: "add" ,
            type: "list",
            message: "Would you like to add more employees?",
            choices: ["Engineer", "Intern", "No thanks!"]
        }
    ]).then(answers => {
        console.log(answers.add)
        if(answers.add == "Engineer"){
            engineer()
        }
        if(answers.add == "Intern"){
            intern()
        }
        if(answers.add == "No thanks!"){
            console.log('Index.html has been generated')
            fs.writeFile('./dist/index.html', generateHTML(team), (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('done')
                }
            } )
            
        }
    })
}

function managerLog() {
    inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "Please input the team manager's name"
        },
        {
            name: "managerID",
            type: "input",
            message: "Please input the team manager's ID"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "Please input the team manager's email"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Please input the officeNumber"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)
        team.push(manager)
        console.log(team)
        addEmployee()
    })

}

managerLog()