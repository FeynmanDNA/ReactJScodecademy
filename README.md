# Learning Notes from Codecademy ReactJS Tutorial :clap: :clap: :clap:
## and more(?)

*[from Codecademy ReactJS tutorial](https://www.codecademy.com/courses/react-101/)*
*this markdown is typed/previewed with (https://dillinger.io)*

## Table of Contents (yes, i know, it is that long)
- [Intro to JSX](#intro-to-jsx)
- [ReactDOM](#reactdom)
- [React library](#react-library)
- [Component](#component)
- 

## Intro to JSX
*JSX is not essential to ReactJS, but many React apps do use JSX.*

**What is JSX?**
JSX is a syntax extension for JavaScript, but not valid JavaScript, and web browsers can't read it, yet. It has be compiled first, for example with Babel, especially when using **ES2015 and JSX**. Before the JSX reaches a web browser, a JSX compiler will translate any JSX into *vanilla* JavaScript.

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. JSX elements can be stored in JS objects, saved in a variable, etc. 

**Note:** JSX expression must have exactly *one* outermost element. The solution is usually simple: wrap the JSX expression in a `<div></div>`.

## ReactDOM
ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, dealing with the DOM.

`ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. 
`ReactDOM.render(JSXelement, WhereToAppendJSXinDOM)` 

One special thing about `ReactDOM.render()` is that it only updates DOM elements that have changed. If you render the exact same thing twice in a row, the second render will do nothing:
```javascript
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:
ReactDOM.render(hello, document.getElementById('app'));
```
React accomplishes this thanks to something called the **virtual DOM**.

## React library
React applications are made out of components.
```javascript
// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }
```
This imported object, **React**, is the React library, and it contains methods that you need in order to use React. Some of the React methods include:
when a JSX element is compiled, it transforms into a `React.createElement()` call, **`React.createElement()` must be available in order for JSX to work.** and `React.Component` etc.

The methods imported from `'react-dom'` are meant for interacting with the DOM. You are already familiar with one of them: `ReactDOM.render()`.

The methods imported from `'react'` don't deal with the DOM at all. They don't engage directly with anything that isn't part of React, such as creating components or writing JSX elements.

## Component
*Remember: a component class is not a component* 

To make a component class, you use a base class from the React library: `React.Component`

React.Component is a JavaScript **class**, or blueprint in a factory. To create your **own** component class, you must **subclass** React.Component. You can do this by using the syntax class `class YourNewClass extends React.Component {}`.

**Note: Component class variable names must begin with capital letters! for `<Component />` later**

In the body of your component class: the pair of curly braces after `React.Component`, is a set of instructions, explaining to your component class how it should build a React component.

**Now Create a Component Instance**
`YourNewClass` is now a working component class! It's ready to follow its instructions and make some React components, like in a factory :factory: :factory: :factory:
JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! So must be a capitalized name:
`<YourNewClass />` or `<DragonKnight />`.

**One property a React componnet MUST instruct in the body is a `render()` method.** 

A render method must contain a `return` statement. Usually, this return statement returns a JSX expression.

**What is the point of a render method?**
Whenever you make a component, that component inherits all of the methods of its component class. Your component class has one method: YourNewClass.render(). Therefore, <MyComponentClass /> also has a method named render, which is inherited.

To **call a component's render method**, you pass that component to `ReactDOM.render()`. ReactDOM.render() will tell <MyComponentClass /> to call its render method.








