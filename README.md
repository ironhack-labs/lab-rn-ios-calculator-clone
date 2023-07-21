![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - iOS Calculator Clone

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completing this exercise, you will be able to:

- Use the basic components of React Native.
- Create custom styles with StyleSheet.
- Manage the state of our application with useState.
- Create a custom hook to handle the logic of our calculator and make it reusable.
- Use TypeScript to type our application, whether it's the props of our components, the state of our application, or the parameters and return value of our custom hooks.

## Introduction

In this exercise, we will create a calculator for iOS using React Native. For this, we will use the basic components of React Native, such as View, Text, or TouchableOpacity, and we will create custom styles with StyleSheet. In addition, we will use TypeScript to type our application, whether it's the props of our components, the state of our application, or the parameters and return value of our custom hooks.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the version of Node specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Example

This is an example of how the calculator we are going to create should look:

![Calculator](./assets/calculator.GIF)

## Instructions

### Iteration 1: Create the basic structure of the application

The first thing we are going to do is create the folder and file structure of our application. To do this, we will create a `src` folder at the root of our project, and inside it, we will create the following folders:

- `components`: in this folder, we will create all the components we will use in our application.

- `hooks`: in this folder, we will create all the custom hooks we will use in our application.

- `screens`: in this folder, we will create all the screens we will use in our application.

- `theme`: in this folder, we will create all the styles we will use in our application.

### Iteration 2: Create the screen of our calculator

- Create a file `CalculatorScreen.tsx` in the `screens` folder.

- Create a functional component that renders a `View` with a `Text` displaying the number being entered on the calculator.

- Create the styles for `CalculatorScreen` in a new file called `CalculatorScreen.styles.ts` within the `theme` folder.

- Create a `StyleSheet` object with the styles you will use in the `CalculatorScreen` component.

- Import the styles into the `CalculatorScreen.tsx` file and use them.

- Import `CalculatorScreen.tsx` into the `App.tsx` file and render it.

### Iteration 3: Create the container for our calculator buttons

- Create the calculator container.

- Create a file `CalculatorContainer.tsx` in the `components` folder, then create a functional component that renders a `View` with a `children` to render the content passed to it via props.

** Don't forget to type the component with TypeScript.

- Create the container styles.

- Import `CalculatorContainer` into the `CalculatorScreen.tsx` file and render it below the `Text` we previously created.

### Iteration 4: Create the buttons for our calculator

- Create the calculator buttons.

- Create a file `CalculatorButton.tsx` in the `components` folder.

- Inside `CalculatorButton`, create a functional component that renders a `TouchableOpacity` with a `Text` displaying the text passed to it via props.

- The `CalculatorButton` component should receive the button text as `children`.

- The `CalculatorButton` component should receive the button color as `color`.

- The `CalculatorButton` component should receive the text color as `colorText`.

- The `CalculatorButton` component should receive the text size as `size`.

- The `CalculatorButton` component should receive the function that will be executed when the button is pressed as `onPress`.

** Don't forget to type the component's props.

- Tip: you can use conditionals to set the button width or text color.

- Import the button into the `CalculatorScreen.tsx` file and render it within the `CalculatorContainer`.

- Don't forget to pass the required props to the component.

- Arrange the buttons in the order they appear in the calculator image, as well as the colors shown in the image.

* Tip: you can use styles.containerButtons to style the `View` that contains the buttons.

### Iteration 5: Create the custom hook for our calculator to manage the application's state

- Create a custom hook to manage the calculator's state and methods

- Create a file `useCalculator.ts` in the `hooks` folder

- Create a custom hook that returns the application's state and functions to manage it.

** You can use useState, useRef, or any other hook you might need.

- Import and use the custom hook in the `CalculatorScreen.tsx` file

- Create a function to clear the calculator

- Create a function to add a number or dot to the calculator

- Create a function to change the calculator number's sign

- Create a function to delete the calculator's last number

- Create a function to perform an operation

- Create a function to divide the calculator's number

- Create a function to multiply the calculator's number

- Create a function to subtract from the calculator's number

- Create a function to add to the calculator's number

- Use the functions you've just created in the calculator's buttons

## Bonus

### Bonus 1: Create an interface to type our calculator's custom hook

### Bonus 2: Add a state to manage the calculator's previous number

Happy coding! 💙