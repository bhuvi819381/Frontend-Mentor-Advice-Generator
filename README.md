# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Solution URL: [https://github.com/bhuvi819381/Frontend-Mentor-Advice-Generator]
- Live Site URL: [https://bhuvi819381.github.io/Frontend-Mentor-Advice-Generator]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

```const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice', { cache: "no-cache" });
            const data = await response.json();
            const { id, advice } = data.slip;
            adviceNumber.textContent = `ADVICE #${id}`;
            adviceQuote.textContent = `“${advice}”`;
        } catch (error) {
            adviceNumber.textContent = 'ADVICE #...';
            adviceQuote.textContent = '“Failed to fetch advice. Try again later.”';
        }
    };

```



## Author


- Frontend Mentor - [@karan819381](https://www.frontendmentor.io/profile/karan819381)
