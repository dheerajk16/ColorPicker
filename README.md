# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Create New React App
=====================
npm create vite color-picker --template react


# Start App
=====================
cd color-picker
npm install
npm run dev


# ColorPicker Component
=======================

This file defines a `ColorPicker` component using React. This component allows users to select a color from a set of primary and secondary colors.

## Props

The component accepts the following props:

- `primaryColors`: An array of primary colors. Each color is represented as a string. This prop is optional and defaults to `['red', 'blue', 'yellow']`.

- `secondaryColors`: An array of secondary colors. Each color is represented as a string. This prop is optional and defaults to `['green', 'orange', 'purple']`.

- `selectedColor`: A string representing the currently selected color. This prop is required.

- `handleSelectedColor`: A function that handles the event of selecting a color. This function is expected to take a string (the selected color) as its argument. This prop is required.

- `placement`: A string that determines the placement of the color picker. This prop is required and can be one of the following: 'top', 'bottom', 'left', 'right'.

## State

The component maintains the following state:

- `position`: An object that determines the position of the color picker.

- `isVisible`: A boolean that determines whether the color picker is visible.

- `primaryShades`: An array of objects, each representing a primary color and its shades.

- `secondaryShades`: An array of objects, each representing a secondary color and its shades.

## Functions

The component defines the following functions:

- `toggleVisibility`: Toggles the visibility of the color picker.

- `handleClickOutside`: Handles the event of clicking outside the color picker.

## Effects

The component defines the following effects:

- An effect that sets the position of the color picker based on the `placement` prop.

- An effect that sets the primary and secondary shades based on the `primaryColors` and `secondaryColors` props.

- An effect that adds and removes an event listener for clicking outside the color picker.

## Render

The component renders a button that toggles the visibility of the color picker. When the color picker is visible, it displays the primary and secondary shades. Each shade is represented as a button that, when clicked, calls the `handleSelectedColor` function with the selected shade.

## PropTypes

The component uses PropTypes to validate its props. The `selectedColor`, `handleSelectedColor`, and `placement` props are required. The `primaryColors` and `secondaryColors` props are optional and default to specific arrays of colors.

# Accessibility:
  - The color picker is accessible via keyboard navigation.
  - ARIA roles and attributes are used to improve screen reader support.
 