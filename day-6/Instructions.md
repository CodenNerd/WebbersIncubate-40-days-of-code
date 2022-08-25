# Day 6

## Update your project

- Go to your fork of the repo and update upstream
- Now you should see Day-6 folder updated in your fork
- Go to your VSCode
- Open your project by going to `File`>`Open Folder` and then select your project folder `WebbersIncubate-40-days-of-code`
- Now that your project is open in VSCode, got to the terminal by pressing `CTRL` and backtick
- In the terminal, type `git pull origin main` to update your local version of the repo with the one on GitHub
- Press enter

## Main task
- Onlick of a button, Copy content from one element to another element (Copy&Paste).

## Detailed explanation
- In the `Day-6/` directory, create `index.html`, create `index.js`
- In the html file, create a `div` element, give it a background color of red and a text color of white.
- In the above `div`, give it a content of `Welcome to 40 days of code`.
- Create a button named `Copy`.
- Create another `div` element, give a background color of blue and a text color of white.
- The blue `div` element created above should not have any content within it.
- Meanwhile, both `div's` should have a width of 500 pixels and a height of 500 pixels.
- Write an onclick event and pass a function to the copy `button`. 
- In the JS file, write a function that grabs the content from the the blue `div` and passed to the red `div` created in the html file.
- When the button is clicked, the blue `div` content should be printed to the red `div` element.

## HINTS: 
- Use `document.getElementById('blueDivId').innerHTML` to grab your blue `div` content
- Use `document.getElementById('redDivId').innerHTML` to grab your red `div` content
- Assign the content stored in the blue `div` variable to the red `div` variable to set the content of the red `div`
- Do your print inside the red `div`.
- 

## Commit and make a Pull Request
- Open your VSCode terminal
- Type `git add .` This is called staging your changes.
- Type `git commit -m "Implement Day 5 task"`. This saves your changes using the quoted statement as labels.
- Type `git push origin main`. This pushes your main branch to GitHub
- Go to github and make a pull request
