# Day 1 - Making your first Pull Request

## Clone your repository

- Go to your forked version of this repository. That's where we start from.
- Click the green button that says `Code` 
- It'll show a dropdown. Switch from the SSH option to HTTPS
- Now copy the url. There's a copy icon there that you can use. Let's call this URL you copied `THE_URL_YOU_COPIED`
- ![image](https://user-images.githubusercontent.com/34954722/177477349-1f64ee2d-ed09-46bd-8d10-323b9e3c51e9.png)

- Now go to your VSCode. 
- Open the terminal by pressing ` Ctrl and backtick `. Backtick is this sign \` . You'll find it on the top by the left of `1` on your keyboard.
- If you have issues opening the terminal, please reach out
- On your VSCode, click the option `File` > `Open Folder`
- Select the folder where you'll like your project to be in. I would advise you select `Documents`
- In your terminal, type `git clone THE_URL_YOU_COPIED`. Press `Enter`.
- You should now see the cloned folder in the left panel of your VSCode.
- Now let's open this cloned folder instead of `Documents`. Go to `File` > `Open Folder`. Select the folder you just cloned.
- Sweet.


## Create your working files

- In the `Day-1/` directory, create `index.html`, create `index.js`
- In the JS file, create a function that prints "Hello World! Welcome to 40 days of Code."
- In the HTML file, create a button that calls the function onclick.
- Test your code in the browser and make sure it shows "Hello World! Welcome to 40 days of Code." only after clicking the button.


## Commit and make a Pull Request

- Open your VSCode terminal
- Type `git add .` This is called staging your changes.
- Type `git commit -m "Implement Day 1 task"`. This saves your changes using the quoted statement as labels.
- Type `git push origin main`. This pushes your main branch to GitHub

