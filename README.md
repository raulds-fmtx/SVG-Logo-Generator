# SVG Logo Generator
    
![License](https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen) 
    
An SVG Logo Generator that generates an SVG file containing a solid-colored logo with up to three characters displayed. This project utilizes ES6 classes to build the logo and render it to the svg file. Inquirer.js is used to gather user data for customizing the logo.
    
## Table of Contents
    
* [Installation](#Installation)
    
* [Usage](#Usage)
    
* [Tests](#Tests)
    
* [License](#License)
    
* [Author](#Author)
    
## Installation
    
To generate your own logo, first enter Git Bash. Then clone the repository with the following link: [SVG Logo Generator Repository](https://github.com/raulds-fmtx/README-Inquirer-Generator.git).
Next run `npm install` in order to install the required npm package dependencies in your cloned directory.
Then run the application with the command `node index.js`.
    
## Usage
    
When you run `node index.js`, you will be prompted by the `inquirer` package to answer a series of questions in the command line about your logo customization preferences.
From there, the application will generate a `.svg` file based on your response to the Inquirer prompts.
Lastly, `fs.writeFile` is used to generate your project's `logo.svg` file. Check out any of the `.svg` files in the [examples](./examples/) directory as an example.
    
[Click Here to View a Demo.]()

## Tests

`jest.js` is utilized to build a testing and debugging suite for the SVG Logo Generator. The `test.js` files are contained within the [test](./test/) directory and test the `logo`, `shape`, and various shape extensions with 17 different tests. This test suite can be run by entering the [`package.json`](./package.json) and clicking the `Debug` icon that appears above `"scripts"`.

## License
    
This project is license under the MIT License - see the [License](https://choosealicense.com/licenses/mit/)
    
## Author
    
Raul Santos
    
Github: [raulds-fmtx](https://github.com/raulds-fmtx)
Repo: [SVG-Logo-Generator](https://github.com/raulds-fmtx/SVG-Logo-Generator)