# JavaScript Calculator

A simple, functional calculator built with vanilla JavaScript, HTML, and CSS. This project implements a basic calculator with a clean interface and standard arithmetic operations.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Error handling for division by zero
- Decimal point support
- Clear button to reset calculations
- Responsive design with visual feedback on button press
- Clean, modern UI with distinct button styling for different operation types

## How It Works

The calculator follows standard calculator logic:
1. Enter the first number using the digit buttons
2. Select an operator (+, -, *, /)
3. Enter the second number
4. Press equals (=) to see the result
5. Chain operations by pressing another operator after seeing a result

## Technical Implementation

The calculator is built with:
- **HTML**: Provides the structure for the calculator display and button container
- **CSS**: Styles the calculator with a modern look and responsive design
- **JavaScript**: Handles all calculator logic and DOM manipulation

Key JavaScript functions:
- `createButtonRows()`: Dynamically creates the button grid layout
- `addNumButtons()`: Creates and positions all numeric buttons
- `addOperators()`: Creates and positions operator buttons
- `operate()`: Performs the selected arithmetic operation
- Event handlers for processing user input and updating the display

## Special Features

- Division by zero shows a friendly error message
- Decimal point can only be used once per number
- Visual feedback on button press with scaling animation
- Distinct color coding for different button types:
  - Number buttons: White
  - Operators: Light orange
  - Equals: Light blue
  - Clear: Light red
  - Decimal: Light blue

## Project Background

This calculator was created as a final project for the JavaScript Fundamentals course, demonstrating practical application of core JavaScript concepts including:
- DOM manipulation
- Event handling
- Functions and logic flow
- Data parsing and calculations
