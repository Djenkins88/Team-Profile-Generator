const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");
const { generate } = require("rxjs");
const generatedHTMLFilePath = "./dist/index.html";

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

  .then((answers) => {
    let manager = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    teamMembers.push(manager);
    userChoice();
  });

function userChoice() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "additionalMember",
        message: "Select a team member to add",
        choices: ["Engineer", "Intern", "Create Team"],
      },
    ])
    .then((answers) => {
      switch (answers.additionalMember) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          createTeam();
      }
    });
}

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
        name: "internEemail",
        message: "Enter intern's email.",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school.",
      },
    ])

    .then((answers) => {
      let intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      userChoice();
    });
}

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineer's name",
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

      .then((answers) => {
        let engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        userChoice();
      });
  }

