// Import external packages
const inquirer = require("inquirer");
const fs = require("fs");
// Import internal modules
const Logo = require("./lib/logo.js");

// User questions
const questions = [
  {
    // Get logo text
    type: "input",
    message: "What is the text to be displayed in your logo?",
    name: "txt",
    validate: function (answer) {
      if (answer.length > 3) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    // Get logo text fill
    type: "input",
    message: "What is the text color to be displayed in your logo?",
    name: "txtFill",
  },
  {
    // Get logo shape
    type: "list",
    message: "Choose a shape for your logo.",
    choices: ["circle", "triangle", "square"],
    name: "shape",
  },
  {
    // Get logo background fill
    type: "input",
    message: "What is the background color to be displayed in your logo?",
    name: "bgFill",
  },
  {
    // Get target directory
    type: "input",
    message:
      "Please enter the relative file path of your target directory for the README file. Leave blank to view the file in the local './examples' directory.",
    name: "filePath",
  },
];

// svg file writer
function writeToFile(filePath, logoContent) {
    let detectFilePath = filePath ? filePath : './examples';
    fs.writeFile(`${detectFilePath}/logo.svg`, logoContent, err => {
        if (err) {
            return console.log(err);
        }
    });
}

// program initialization
async function init() {
    try {
        const userResponse = await inquirer.prompt(questions);
        console.log('User Response: ', userResponse);
        
        const logo = new Logo(
          userResponse.txt,
          userResponse.txtFill,
          userResponse.shape,
          userResponse.bgFill
        );
        console.log('Logo: ', logo);

        writeToFile(userResponse.filePath, logo.render());
        console.log("Generated logo.svg");

    } catch (err) {
        console.error();
    }
}

// Function call to initialize app
init();