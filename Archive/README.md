# Learning Notes from Codecademy ReactJS Tutorial *RUA!*
## and more(?)

*[mostly from Codecademy ReactJS tutorial](https://www.codecademy.com/learn/react-101),*
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
- [this in Component](#this-in-component)
- [Event handler in React](#event-handler-in-react)
- [Component in Render Method](#component-in-render-method)
- [File import export](#file-import-export)
- [props](#props)
- [Render a Component props](#render-a-component-props)
- [props to make decisions](#props-to-make-decisions)
- [props handleEvent onEvent](#props-handleevent-onevent)
- [this props children](#this-props-children)
- [defaultProps](#defaultprops)
- [Setting Initial State](#setting-initial-state)
- [Update state with setState](#update-state-with-setstate)
- [Stateless Inherit Stateful](#stateless-inherit-stateful)
- [React Styles](#react-styles)
- [Separating Container Components from Presentational Components](#separating-container-components-from-presentational-components)
- [Stateless Functional Component](#stateless-functional-component)
- [propTypes](#proptypes)
- [React Forms](#react-forms)
- [Controlled vs Uncontrolled](#controlled-vs-uncontrolled)
- [Mounting Lifecycle Methods](#mounting-lifecycle-methods)
- [Updating or Unmounting Lifecycle Methods](#updating-or-unmounting-lifecycle-methods)

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

If you want to create a list of JSX elements, use `.map()`.
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
**JSX elements** can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! So must be a capitalized name:
`<YourNewClass />` or `<DragonKnight />`.

**One property a React componnet MUST instruct in the body is a `render()` method.** 

A render method must contain a `return` statement. Usually, this return statement returns a JSX expression.

**What is the point of a render method?** Whenever you make a component, that component inherits all of the methods of its component class. Your component class has one method: YourNewClass.render(). Therefore, <MyComponentClass /> also has a method named render, which is inherited. To **call a component's render method**, you pass that component to `ReactDOM.render()`. ReactDOM.render() will tell <MyComponentClass /> to call its render method.

In the return(), a multi-line JSX expression should always be wrapped in parentheses!

**Put Logic in a Render Function**
The logic controls etc should not be part of **the class declaration itself**, but should occur in a **method** like `render()`.
```javascript
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
```

## this in Component

cookbook example:
```javascript
//in ES6 classes you can omit function
//hence you have a thing like render() {...
class IceCreamGuy extends React.Component {
  //IceCreamGuy has two methods: .food and .render()
  get food() {
    return 'ice cream';
    //a getter is supposed to return a value
    //about getters: they are basically syntactic sugar
    //and make it possible to abstract away some details of your class
  }
  render() {
    return <h1>I like {this.food}.</h1>;
    //this refers to an instance of IceCreamGuy
    //Why don't you need parentheses after this.food?
    //Shouldn't it be this.food()?
  }
}//You don't need those parentheses because .food is a getter method
```

## Event handler in React

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

An event *handler* is a function that gets called in response to an event. In the above example, the event handler is myFunc().

In React, you define event handlers as methods on a component class. Like this:
```javascript
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
    //scream() function calls alert() function
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
    //the reason you pass in this.scream to the handler and not this.scream()
    //is that the handler needs a function object,
    //not the result of the function - the handler will call the
    //function when the right time comes (click)
  }
}
```
Notice that the component class has two methods: `.myFunc()` and `.render()`.

## Component in Render Method

Render methods can also return another kind of JSX: component instances.
```javascript
class Worker extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Master extends React.Component {
  render() {
    return <Worker />;
  }
}
```
In the above example, `Master`'s render method returns an instance of the `Worker` component class. 
When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.

## File import export
*Thanks to ES2015*

If you use an `import` statement and begins with either a dot or a slash, then import will treat that string as a filepath. 

*If your filepath doesn't have a file extension, then ".js" is assumed.*

"Named" vs default export: {}

```javascript
//"named exports." 
//When you use named exports, you always need to 
//wrap your imported names in curly braces, such as:
import { faveManifestos, alsoRan } from './Manifestos';

/* place the keyword export immediately before something that 
you want to export. That something can be any top-level 
var, let, const, function, or class
*/
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
```

## props

A component's `props` is an object. It holds information about that component.
To see a component's `props` object, you use the expression `this.props`.

**Pass `props` to a Component**

You can pass information to a React component, by giving that component an attribute:
```javascript
<MyComponent foo="bar" />
// values that aren't strings are wrapped in curly braces{}
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

## Render a Component props

1 - Find the component class that is going to receive that information.
2 - Include **`this.props.name-of-information`** in that **component class's render method's return statement**.
```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
ReactDOM.render(
  <Greeting firstName='William' />, 
  document.getElementById('app')
);
```

*Note:*`props` is the name of the **object** that stores passed-in information. `this.props` refers to **that storage object**. At the same time, each piece of passed-in information is called a `prop`. This means that `props` could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

## props to make decisions

The Welcome component class detects `this.props.name` 's piece of information called name. However, Welcome never renders this piece of information! Instead, it uses the information to make a decision.
```javascript
export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}
```
## props handleEvent onEvent

It is very common to pass event handler functions as `props`.
You define an event handler as a method on the component class, just like the render method. **Almost all functions that you define in React will be defined in this way, as methods in a class.**

DO NOT ADD COMMA! Methods should never be comma-separated, if inside of a class body. This is to emphasize the fact that **classes and object literals are different**.

Attach a event handler function, and later get that passed-in function to get called. 
```javascript
class Button extends React.Component {
  render () {
    return (
      //display a button html with a special event attribute
      //and onclick will call the local function callAlert
      <button onClick={this.props.callAlert}>
        Click here for Message
      </button>
    );
  }
}
```
Attach any event handler to a JSX element: you give that JSX element a **special attribute**. The attribute's name should be something like `onClick` or `onHover`. **The attribute's value should be the event handler that you want to attach**.

Parent component class  is the component class that defines the event handler and passes it.

**One major source of confusion is the fact that names like onClick have special meaning, but only if they're used on HTML-like elements.**

The name onClick does not create an event listener when used on <Button /> - it's just an arbitrary attribute name.

Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.

## this props children

Every component's `props` object has a property named `children`.

`this.props.children` will return everything in between a component's opening and closing JSX tags =>
`this.props.children` would return everything in between <MyComponentClass> and </MyComponentClass>.

```javascript
<BigButton>
  I am a child of BigButton.
</BigButton>
```
In this example, `this.props.children` would equal the text, "I am a child of BigButton."
If a component has more than one child between its JSX tags, then this.props.children will return those children in an **array**.

You can make use of this array feature:
```javascript
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
```


## defaultProps

You can give your component class a property named `defaultProps`. The defaultProps property should be equal to an object:
```javascript
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// give the Button component class a defaultProps property
Button.defaultProps = {
  text:'make this property an object'
};

//if text attribute is specified on the spot, it will override
ReactDOM.render(
  <Button text="local override" />, 
  document.getElementById('app')
);
```

## Setting Initial State

Unlike props, a component's `state` is not passed in from the outside. A component decides its own state.

To make a component have state, give the component a state property. This property should be declared inside of a `constructor` method, like this:
```javascript
class App extends React.Component {
  // constructor method begins here:
  //give the constructor method a single parameter, props
  constructor(props) {
    //React components always have to call super 
    //in their constructors to be set up properly.
    super(props);
    //this.state is an object
    this.state = { title: 'Best App' };
  }
  render() {
    //read your state's "title" property.
    //use the expression this.state.name-of-property
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Update state with setState

`this.setState()` takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.

Like virtual-DOM, `this.setState()` takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. :love_letter:

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };  
    //in React, whenever you define an event handler that uses this
    //you need to add 
    //this.methodName = this.methodName.bind(this) 
    //to your constructor function.
    this.changeColor = this.changeColor.bind(this);
  }
```
Any time that you call `this.setState()`, `this.setState()` AUTOMATICALLY calls `.render()` as soon as the state has changed.

Think of `this.setState()` as actually being two things: `this.setState()`, immediately followed by `.render()`.

That is why you can't call this.setState() from inside of the .render() method!

## Stateless Inherit Stateful
*Stateful component passes its state down to a stateless component.*

You learned earlier that a component can change its `state` by calling `this.setState()`. You may have been wondering: how does a component change its `props`?

The answer: it doesn't!

**A component should never update `this.props`.**

**A React component should use `props` to store information that can be changed, but can only be changed by a different component.**

**A React component should use `state` to store information that the component itself can change.**

One thing about components is that they should only have one job.
One component for displaying the name, and a different component for allowing a user to change the name. Child offered a way to change that name. Sibling displayed a name.

- Define an Event Handler: To make a child component update its parent's `state`, the first step is something that you've seen before: you must define a state-changing method on the parent.
- Pass the Event Handler: Now Parent must pass this function down to Child, so that Child can use it in an event listener.
- Receive the Event Handler: You just passed a function down to Child that can change Parent's state!
- Then stateful Parent passes down its state to a different stateless component Sibling
- Stateless component Sibling receives the state and displays it.

**Note: As with all methods that we pass in React, we must first bind `this` to our new method to the current instance**

## React Styles

**Inline Styles**
An inline style is a style that's written as an attribute, like this: `style={{ color: 'red' }}`. The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX." The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object: `{ color: 'red' }`.

An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.

```javascript
const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}
```
In regular JavaScript, style names are written in hyphenated-lowercase:
```javascript
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};
```
In React, those same names are instead written in **camelCase**:
```javascript
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};
```
For example, `margintop` will have no effect on the style!

In regular JS, style values are almost always strings. Even if a style value is numeric.
In React, if you write a style value as a **number**, then the unit "px" is assumed. For units other than "px," you can use a string.
```javascript
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
}
```

## Separating container components from presentational components

If a component has to have `state`, make calculations based on `props`, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should **render another component**. It should be **that component**'s job to render HTML-like JSX.

## Stateless Functional Component

If you have a component class with nothing but a `render` function, then you can rewrite that component class in a very different way. Instead of using `React.Component`, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component. Stateless functional components usually have `props` passed to them.

To access these `props`, give your stateless functional component a parameter. This parameter will automatically be equal to the component's props object.

```javascript
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
  	let title = this.props.title;
    return <h1>{title}</h1>;
  }
}


// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}
// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}
// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
	let title = props.title;
  return <h1>{title}</h1>;
}
```

Not only are stateless functional components more concise, but they will subtly influence **how you think about components in a positive way**. They emphasize the fact that **components are basically functions**! 

**A component takes two optional inputs, `props` and `state`, and outputs HTML and/or other components.**

## propTypes

`propTypes` are uesful for two reasons: 1.prop validation (for console), 2. documentation (when you have many files...)

If a component class expects a `prop`, then you can give that component class a propType!
`<MessageDisplayer message="something" />`
```javascript
export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};
```
The value of each property in propTypes should fit this pattern:
`React.PropTypes.expected-data-type-goes-here`
like 
```javascript
BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired
};
```
If you add `.isRequired` to a `propType`, then you will get a console warning if that `prop` isn't sent.

**Note: value of propTypes is an object**, not a function!

## React Forms

In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.

Give `<input />` an `onChange` attribute. Set `onChange`'s value equal to `{this.handleUserInput}`.

Define a function that gets called whenever a user enters or deletes any character. This function will be an *event handler*. It will listen for change events. 

## Controlled vs Uncontrolled

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

If a `<Square />` does not have state, only listens to props, then `<Square />` no longer keeps its own state. 
It receives its value from its parent `<Board />` and informs its parent when it’s clicked. 
We call components like this **controlled components**.

The fact that `<input />` keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through `props`. Most React components are controlled.

## Mounting Lifecycle Methods

**What's a Lifecycle Method?**
Lifecycle methods are methods that get called at certain moments in a component's life.

You can write a lifecycle method that gets called right before a component renders for the first time.

You can write a lifecycle method that gets called right after a component renders, every time except for the first time.

There are three categories of lifecycle methods: **mounting, updating, and unmounting**.

A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.

**There are three mounting lifecycle methods**:

- `componentWillMount`
- `render`
- `componentDidMount`

When a component mounts, it **automatically calls these three methods, in order**.

The first mounting lifecycle method is called `componentWillMount`.

When a component renders for the first time, `componentWillMount` gets called right **before render**.

```javascript
export class Example extends React.Component {
  componentWillMount() {
    alert('component is about to mount!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Example />,
    document.getElementById('app')
  );
}, 2000);
```
**Note!** Two seconds later, `<Example />` renders again. `componentWillMount` does NOT get called, because mounting lifecycle events only execute the first time that a component renders.

You can call `this.setState` from within `componentWillMount` to interfere with the `state` before `render` can. 
```javascript
export class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentWillMount() {
    this.setState({ text: 'Hello world' });
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}
```

When a component renders for the first time, `componentDidMount` gets called right after the HTML from `render` has finished loading. 

If your React app uses AJAX to fetch initial data from an API, then `componentDidMount` is the place to make that AJAX call. More generally, `componentDidMount` is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. `componentDidMount` is also the place to set timers using `setTimeout` or `setInterval`.

```javascript
  componentDidMount() {
    setTimeout(() => {
      alert("sth");
    }, 2000);
  }
```

## Updating or Unmounting Lifecycle Methods

**What is updating?**

The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

There are **five updating lifecycle methods**:

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

**Whenever a component instance updates, it automatically calls all five of these methods, in order**.
















