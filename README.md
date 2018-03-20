# Learning Notes from Codecademy ReactJS Tutorial 
and more
:school_satchel: :clap:
[Codecademy ReactJS tutorial](https://www.codecademy.com/courses/react-101/)
*this markdown is typed/previewed with (https://dillinger.io)*
==================================
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

