# Day 3

## Update your project

- Go to your fork of the repo and update upstream
- Now you should see Day-3 folder updated in your fork
- Go to your VSCode
- Open your project by going to `File`>`Open Folder` and then select your project folder `WebbersIncubate-40-days-of-code`
- Now that your project is open in VSCode, got to the terminal by pressing `CTRL` and backtick
- In the terminal, type `git pull origin main` to update your local version of the repo with the one on GitHub
- Press enter

## Main task
Create a function that takes in an argument and prints the argument to the screen on click of a button. Use the explanation below to guide you on how to go about it.

## Detailed explanation
- In the `Day-3/` directory, create `index.html`, create `index.js`
- In the JS file, create a function that takes in a parameter
- In the HTML file, create a button that calls the function `onclick`, and pass an argument of string to the function.
- Whatever is passed into the function from the onclick call on the button should be printed to screen.
- The argument that should be passed to the function is `Welcome To 40 Days Of Code`.

## HINTS: 
- Use `document.write()` or `console.log()` to print to the page
- Do your print inside your function

## Commit and make a Pull Request
- Open your VSCode terminal
- Type `git add .` This is called staging your changes.
- Type `git commit -m "Implement Day 3 task"`. This saves your changes using the quoted statement as labels.
- Type `git push origin main`. This pushes your main branch to GitHub
- Go to github and make a pull request
