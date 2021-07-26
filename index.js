const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const { exit } = require("process");
 
let teamMembers = [];


  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter manger name.",
      },
      {
        type: "input",
        name: "managerID",
        message: "Enter manager employee id",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager email.",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter manager office number.",
      },
    ])
  
    .then(answers => {
      let manager = new Manager(answers.managerName,answers.managerID,answers.managerEmail,answers.managerOfficeNumber);
      teamMembers.push(manager);
      userChoice();
    });

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter intern name",
      },
      {
        type: "input",
        name: "internID",
        message: "Enter intern employee ID.",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email.",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school.",
      },
    ])

    .then(answers => {
      let intern = new Intern(answers.internName,answers.internID,answers.internEmail,answers.internSchool);
      teamMembers.push(intern);
      userChoice();
    });
}

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter engineer name",
        },
        {
          type: "input",
          name: "engineerID",
          message: "Enter enigneer employee ID.",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter engineer email.",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter engineers Github username.",
        },
      ])

      .then(answers => {
        let engineer = new Engineer(answers.engineerName,answers.engineerID,answers.engineerEmail,answers.engineerGithub);
        teamMembers.push(engineer);
        userChoice();
      });
  }

 
  function userChoice(){
  inquirer
  .prompt([ 
    {
          name:"additionalTeamMember",
          type: "list",
          message: "select team members to add",
          choices: ["Engineer", "Intern", "generateHTML", "Exit"]
    }   
  ]) 
    .then(answers => {
      switch(answers.additionalTeamMember) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          generateHTML();
        }
    });
  }


function generateInitialHTML()
  {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./profile.css">
    </head>
    <body>
        <div class="navbar">
            <h2>My Team</h2>
        </div>
    
        <div class="cardBody">`
  }

 function generateTeamMemberHtml(teamMembers)
  {
    return `  <div class="teamMemberCard">
    <div class ="teamMemberTitle">
      <p>${teamMembers.getRole()}</p>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>Name:${teamMembers.getName()}</li>
            <li>ID:${teamMembers.getId()}</li>
            <li>Email: <a href="mailto:${teamMembers.getEmail()}">${teamMembers.getEmail()}</a></li>
            ${teamMembers.getRoleHtml()}
        </ul>
    </div>
</div>`;
  }

  function generateFinalHtml()
  {
    return `   </div>
    </body>
    </html>`;
  }

  function generateHTML()
  {
    fs.writeFileSync('./dist/index.html',"");
    let htmlData = generateInitialHTML();
    for(var a in teamMembers)
    {
      htmlData += generateTeamMemberHtml(teamMembers[a]);
    }
    htmlData += generateFinalHtml();
    fs.writeFileSync('./dist/index.html',htmlData);
  }
