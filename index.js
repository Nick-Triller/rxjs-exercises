'use strict';
const fs = require("fs");

// Command line argument
const arg = process.argv[2];
// List of available exercises
const modules = list();

switch (arg) {
    // No command line argument
    case undefined || "help":
        help();
        break;
    // List all exercises
    case "list":
        modules.forEach(e => {
            console.log(e);
        });
        break;
    // Run exercise if it exists
    default:
        if (modules.includes(arg)) {
            runExercise(arg);
        }
        else {
            console.log("Exercise not found. Run help command for usage information.")
        }
}

/**
 * Print usage help
 */
function help() {
    console.log("Usage:")
    console.log("list\t\t\tList all available exercises")
    console.log("<exercide name>\t\tRun specified exercise")
    console.log("help\t\t\tShow help text")
}

/**
 * Returns a list of available exercise modules
 */
function list() {
    let files = fs.readdirSync("./exercises");
    for (let i = 0; i < files.length; i++) {
        // Remove .js file ending
        files[i] = files[i].substr(0, files[i].lastIndexOf(".js"));
    }
    return files;
}

/**
 * Runs an exercise module
 */
function runExercise(moduleName) {
    require("./exercises/" + moduleName)();
}

