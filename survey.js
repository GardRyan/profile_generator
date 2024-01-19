// Focus on the following:

// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);


  rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
    console.log(`${answer} is a pretty wicked name`);

    rl.question(`What's an activity you like doing? `, (answer) => {
      console.log(`${answer} is so much fun!`);

       rl.question(`What do you listen to while doing that?`, (answer) => {
        console.log(`${answer}? No way! I love them!`);

        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
          console.log(`${answer} is so scrumptious! `);

          rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
            console.log(`${answer} is the perfect answer!`);

            rl.question(`Which sport is your absolute favourite?`, (answer) => {
              console.log(`${answer} is a blast!`);

              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
                console.log(`${answer}! You absolutely are!`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});