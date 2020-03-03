const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Initial prompt for creating employees
function initialPrompt() {
    inquirer.prompt({
        type: "list",
        message: "Who would you like to add?",
        name: "role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I'm finished adding employees"
        ]
    }).then(function(response) {
        console.log(response.role)
        switch (response.role) {
            case "Manager":
                manager();
                break;
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;

            default:
                finish();

        }


    })
}
initialPrompt();
// prompt questions for manager
function manager() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Enter name of Manager: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of manager: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of manager: "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter office number of manager: "
        }
        // creating new manager 
    ]).then(function(response) {
        team.push(new Manager(response.name, response.id, response.email, response.officeNumber)),
            initialPrompt();

    })

}
// prompt for engineer
function engineer() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Enter name of engineer number 1: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of engineer number 1: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of engineer number 1: "
        },
        {
            type: "input",
            name: "github",
            message: "Enter GitHub Username of engineer number 1: "
        }
        // creating new engineer
    ]).then(function(response) {
        team.push(new Engineer(response.name, response.id, response.email, response.github))
        initialPrompt();
    })

}
// prompt for interns 
function intern() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Enter name of Intern: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of Intern: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of Intern:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter The school the intern goes to: "
        }
        // creating new intern
    ]).then(function(response) {
        team.push(new Intern(response.name, response.id, response.email, response.school))
        initialPrompt();
    })


}

// team array
const team = []


function finish() {


    console.log(team)

    fs.writeFile(outputPath, render(team), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });



}





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// const Questions = [{
//         type: "input",
//         name: "managerName",
//         message: "Enter name of Manager: "
//     },
//     {
//         type: "input",
//         name: "managerId",
//         message: "Enter ID of manager: "
//     },
//     {
//         type: "input",
//         name: "managerEmail",
//         message: "Enter email of manager: "
//     },
//     {
//         type: "input",
//         name: "ManagerOffice",
//         message: "Enter office number of manager: "
//     },
//     {
//         type: "input",
//         name: "engineerName1",
//         message: "Enter name of engineer number 1: "
//     },
//     {
//         type: "input",
//         name: "engineerId1",
//         message: "Enter ID of engineer number 1: "
//     },
//     {
//         type: "input",
//         name: "engineer1Email",
//         message: "Enter email of engineer number 1: "
//     },
//     {
//         type: "input",
//         name: "engineerGit1",
//         message: "Enter GitHub Username of engineer number 1: "
//     },
//     {
//         type: "input",
//         name: "internName",
//         message: "Enter name of Intern: "
//     },
//     {
//         type: "input",
//         name: "internId",
//         message: "Enter ID of Intern: "
//     },
//     {
//         type: "input",
//         name: "internEmail",
//         message: "Enter email of Intern:"
//     },
//     {
//         type: "input",
//         name: "internSchool",
//         message: "Enter The school the intern goes to: "
//     },

// ]


// function start() {
//     inquirer
//         .prompt(Questions).then(function(response) {
//             console.log(response)

//             render();
//             s.writeFile(outputPath, html, function(err) {

//                 if (err) {
//                     return console.log(err);
//                 }

//                 console.log("Success!");

//             });

//         })
// }
// start();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```