# Learning Notes from Codecademy ReactJS Tutorial *RUA!*
## and more(?)

*[mostly from Codecademy ReactJS tutorial](https://www.codecademy.com/courses/react-101/),*
*this markdown is typed/previewed with (https://dillinger.io)*

## Table of Contents (yes, i know, it is that long)
- [Intro to JSX](#intro-to-jsx)
- [JSX Conditionals](#jsx-conditionals)
- [dotmap in JSX](#dotmap-in-jsx)
- [keys in JSX list](#keys-in-jsx-list)
- [React.createElement](#reactcreateelement)
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

**class vs className**

In HTML, it's common to use class as an attribute name, as in css's class selector:
```html
<h1 class="big">Hey</h1>
```
In JSX, you can't use the word class! You have to use `className` instead:
```javascript
<h1 className="big">Hey</h1>
```
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript. And when JSX is rendered, JSX className attributes are automatically rendered as class attributes in terms of HTML and CSS.

**Self-Closing Tags**

In JSX, you *have to* self-closing tags like `<input />`, `<br />`, `<img />`.

**`<h1>2+3</h1>` vs 2 + 3**

Instead of adding 2 and 3, it printed out "2 + 3" as a string of text. Why?

This happened because 2 + 3 is located in between `<h1>` and `</h1>` tags.
Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.
**Note: In JSX, curly brackets wil indicate JavaScript injection/treatment.**
```javascript
<p>
  {Math.PI.toFixed(20)}
</p>
```

**{Variable} in JSX**

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression:
```javascript
// Declare a variable:
const name = 'Gerdo';
// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

**Event Listeners in JSX, just like in HTML**

You create an event listener by giving a JSX element a special attribute. Here's an example: `<img onClick={myFunc} />`.
An event listener attribute's **name** should be something like `onClick` or `onMouseOver`: the word `on`, plus the type of event that you're listening for. Other event handlers include: `onCut onCompositionEnd onKeyDown onFocus onSubmit onMouseUp onScroll onLoad onTransitionEnd onToggle` etc.

An event listener attribute's **value** should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:
```javascript
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
```
*Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.*

## JSX Conditionals

the words `if` and `else` should not be injected in between JSX tags.
`&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.
```javascript
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

## dotmap in JSX

If you want to create a list of JSX elements, then `.map()` is often your best bet. It can look odd at first:
```javascript
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>

// This is fine in JSX, not in an explicit array:
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
//JSX <li>s don't have to be in an array like this, but they can be.
// This is also fine!
const liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];
<ul>{liArray}</ul>
```
Arrow functions are a short syntax from ES6, use them in place of expressions like function (foo) {...}
Old-school:
`var a2 = a.map(function(s){ return s.length });`
ECMAscript 6 using arrow functions
`var a3 = a.map( s => s.length );`

## keys in JSX list

When you make a list in JSX, sometimes your list will need to include something called `keys`:
```javascript
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique!
keys don't do anything that you can see! React uses them internally to keep track of lists. 
*Good to have them in lists!*

## React.createElement

**You can write React code without using JSX at all!**
The following JSX expression:
`const h1 = <h1>Hello world</h1>;`
can be rewritten without JSX, like this:
```javascript
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```
Every JSX element is secretly a call to React.createElement().

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
```javascript
// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }
```
This imported object, **React**, is the React library, and it contains methods that you need in order to use React. Some of the React methods include:
when a JSX element is compiled, it transforms into a `React.createElement()` call, **`React.createElement()` must be available in order for JSX to work;** and `React.Component` etc.

The methods imported from `'react-dom'` are meant for interacting with the DOM. You are already familiar with one of them: `ReactDOM.render()`.

The methods imported from `'react'` don't deal with the DOM at all. They don't engage directly with anything that isn't part of React, such as creating components or writing JSX elements.

## Component
*Remember: a component class is not a component* 

React applications are made out of components, built with component class. To make a component class, you use a base class from the React library: `React.Component`

React.Component is a JavaScript **class**, or blueprint in a factory. To create your **own** component class, you must **subclass** React.Component. You can do this by using the syntax class `class YourNewClass extends React.Component {}`.

**Note: Component class variable names must begin with capital letters! for JSX  `<Component />` later**

In the body of your component class: the pair of curly braces after `React.Component`, is a set of instructions, explaining to your component class how it should build a React component.

**Now Create a Component Instance**
`YourNewClass` is now a working component class! It's ready to follow its instructions and make some React components, like in a factory :factory: :factory: :factory:
JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! So must be a capitalized name:
`<YourNewClass />` or `<DragonKnight />`.

**One property a React componnet MUST instruct in the body is a `render()` method.** 

A render method must contain a `return` statement. Usually, this return statement returns a JSX expression.

**What is the point of a render method?** Whenever you make a component, that component inherits all of the methods of its component class. Your component class has one method: YourNewClass.render(). Therefore, <MyComponentClass /> also has a method named render, which is inherited. To **call a component's render method**, you pass that component to `ReactDOM.render()`. ReactDOM.render() will tell <MyComponentClass /> to call its render method.










