# Day 4

## Update your project

- Go to your fork of the repo and update upstream
- Now you should see Day-4 folder updated in your fork
- Go to your VSCode
- Open your project by going to `File`>`Open Folder` and then select your project folder `WebbersIncubate-40-days-of-code`
- Now that your project is open in VSCode, got to the terminal by pressing `CTRL` and backtick
- In the terminal, type `git pull origin main` to update your local version of the repo with the one on GitHub
- Press enter

## Main task
- Create a `div` with a content `Welcome to 40 days of code day 4`
- Create a function that grabs the content of the `div` onclick of a button and display it to screen. Use the explanation below to guide you on how to go about it.
- Also create a div that says `Welcome to 40 days of code day 4`

## Detailed explanation
- In the `Day-4/` directory, create `index.html`, create `index.js`
- In the HTML file, create a button that calls the function `onclick`.
- In the JS file, create a function that grabs the content from the div created in the html file.
- When the button is clicked, `Welcome to 40 days of code day 4` should be printed to screen.

## HINTS: 
- Use `document.write()` or `console.log()` to print to the page
- Do your print inside your function
- Use document.getElementById() to grab your div
- Use innerHTML or innerText or textContent to get the content of your grabbed div
- Check out this video on getting innerText or innerHTML or textContent of your grabbed element https://www.youtube.com/watch?v=KsLc9C2D950
- This link shows different ways of grabbing an element from the DOM https://www.w3schools.com/js/js_htmldom_elements.asp


## Commit and make a Pull Request
- Open your VSCode terminal
- Type `git add .` This is called staging your changes.
- Type `git commit -m "Implement Day 4 task"`. This saves your changes using the quoted statement as labels.
- Type `git push origin main`. This pushes your main branch to GitHub
- Go to github and make a pull request
