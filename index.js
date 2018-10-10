'use strict';
const fs = require("fs");

// Command line argument
const command = process.argv[2];
// List of available exercises
const modules = list();

switch (command) {
    // List all exercises
    case "list":
        const seperator = "--------------------------------------------------";
        console.log(seperator)
        modules.forEach((e, i) => {
            console.log("Title\t\t", e.title);
            console.log("File\t\t", e.file);
            console.log("Description\t", e.description);
            console.log(seperator)
        });
        break;
    // Run exercise if it exists
    case "run":
        const arg = process.argv[3]
        for (const module of modules) {
            if (module.file == arg) {
              runExercise(arg);
              return
            }
        }
        console.log("Exercise not found. Run help command for usage information.");
        break;
    default:
        // Invald / missing command or "help"
        help();
        break;
}

/**
 * Print usage help
 */
function help() {
    console.log("Usage:");
    console.log("list\t\t\tList all available exercises");
    console.log("run <filename>\t\tRun specified exercise");
    console.log("help\t\t\tShow help text");
}

/**
 * Returns a list of available exercise modules
 */
function list() {
    const files = fs.readdirSync("./exercises");
    const modules = [];
    for (let i = 0; i < files.length; i++) {
        const module = require("./exercises/" + files[i]);
        module["file"] = files[i];
        modules.push(module);
    }
    return modules;
}

/**
 * Runs an exercise module
 */
function runExercise(moduleName) {
    require("./exercises/" + moduleName).code();
}

