** Super simple interview project written by Pablo Velasco for Vail Resorts **

** Viewing and running the app **

Viewing the project
    Please go to www.paovelasco.com to see the application

Installing and Running the application from your computer
    1. Copy the code files to your computer
    2. Install Node 6
    3. Open the console and navigate to the folder where the code files reside
    4. Install node packages by running the command 'npm install'
    5. Run the application in "Dev mode" by running the command 'npm start -s'. This command will watch for file changes, run all unit tests and lint the code
    6. Navigate to localhost:3000 to view the app


** Code choices **

Why are my tests not in a separate tests folder?
    This is purely a personal preference. When working in JavaScript I usually prefer to place tests alongside the file under test.
    I believe the benefits for this approach are as follows:
    - Clear visibility. It's easy to see if a file, component or class is missing unit tests
    - Easy Imports. Managing relative paths in JavaScript can be annoying. By placing the files next to each other we avoid long relative paths
    - Better for refactoring. If we need to move files it's easy to move both files together and we don't need to modify the relative paths in the code

Why am I using React
    Once I decided to use JavaScript the decision to use React was pretty obvious.
    The easy setup and "nimbleness" of React made it quick to get up and running.
    I also wanted to use some of the latest features in JavaScript. Using React, babel, webpack and others allowed me to code in ES6, lint my code,
    run unit tests, and have hot reloading in my developer environment

Why am I not using Redux
    I originally though of using Redux for this project but once I thought more about it I realized it was an overkill.
    Redux shines when the state of the application has to be shared between different parts of a React application that don't share a common parent.
    This application was small enough that all the state of the application could live in a single react parent class (DiceRollApp).

Where to go from here
    - The application is pretty simple. I would have loved to add user input to say how many dice a user wants to throw as well as how many sides
    each die has. Unfortunately I ran out of time to setup the user input, add validation, and add unit tests for this functionality.
    The rest of the code however is flexible enough to just modify the 2 constants (NUMBER_OF_DICE = 2 and NUMBER_OF_DICE_SIDES = 6) if we want to
    modify the number of dice being rolled and/or the number of side each die has.
    - If this was a project that we were going the continue building I think the next logical steps would be to add Redux so we can track the state
    of the throws through out the entire application and add the ability to persist data to a database through a backend API.
