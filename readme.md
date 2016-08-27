# Colors & Node

We're going to practice working with node modules and npm! We want to sort some song data to output the following:

![mockup](./mockup.png)


### Setup Instructions:

1. Create a `main.js` file and a `run.js` file

1. Copy the following data into `main.js`:
  
  ```javascript
  var songs = [
    { title: 'Imagine', artist: 'John Lennon', difficulty: 3 },
    { title: 'Hey, Soul Sister', artist: 'Train', difficulty: 5.3 },
    { title: 'Call Me Maybe', artist: 'Carly Rae Jepsen', difficulty: 2.5 },
    { title: 'Hotel California', artist: 'The Eagles', difficulty: 3.9 },
    { title: 'Blackbird', artist: 'The Beatles', difficulty: 2.8 },
    { title: 'Valerie', artist: 'Amy Winehouse', difficulty: 3.8 },
    { title: 'Say Something', artist: 'A Great Big World', difficulty: 4.3 },
    { title: 'Fix You', artist: 'Coldplay', difficulty: 2.2 },
    { title: 'Royals', artist: 'Lorde', difficulty: 4.3 }
  ];
  ```

1. Create a `package.json`

1. Install the `colors` [module](https://www.npmjs.com/package/colors) -- make sure to save it as a dependency!

1. Once you've finished coding, create a Pull Request against this repository


### Acceptance Criteria:

Sort and apply color styles in your `main.js` file. If the song has a difficult of less than 3, it should be colored green. If it has a difficult of less than 4, it should be colored yellow. Otherwise, it should be colored red. Your `main.js` file should not have any `console.log` statements in it; it should be simply logic.

In the `run.js` file, print the result to your terminal so that it looks exactly like the above mockup.


### Objectives:

We will be evaluating the following:

* Solve problems requiring conditionals and loops (such as accumulator pattern) with nested/combined control-flow statements
* Iterate over simple data structures (arrays, objects) with loops
* Reads and understands documentation to the extent that they can use documentation in place of stack overflow or tutorials
* Require and use Node modules
* Uses NPM to install 3rd party modules
* Create custom modules
* Uses NPM to manage dependencies and project metadata w/ package.json