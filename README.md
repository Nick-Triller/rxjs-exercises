# Rxjs exercises

## Setup
```npm install```

## Usage

Display help:
```
>> npm start help
Usage:
list                    List all available exercises
run <filename>          Run specified exercise
help                    Show help text
```

List available exercises:
```
>> npm start list
--------------------------------------------------
Title            #1
File             001.js
Description      This is exercise #1
--------------------------------------------------
Title            #2
File             002.js
Description      This is exercise #2
--------------------------------------------------
Title            #3
File             003.js
Description      This is exercise #3
--------------------------------------------------
Title            #4
File             004.js
Description      This is exercise #4
--------------------------------------------------
Title            #5
File             005.js
Description      This is exercise #5
--------------------------------------------------
Title            #6
File             006.js
Description      This is exercise #6
--------------------------------------------------
Title            Template
File             _template.js
Description      I am a template for new exercises.
--------------------------------------------------
```

Run an exercise:
```
>>npm start run 001.js

started
started
next 2
err
unsubscribe handler
next 2
err
unsubscribe handler
```