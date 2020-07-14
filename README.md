# Actions in JavaScript
 Notes and repo on the Actions in JavaScript lecture

***

## Expressions and Functions
When we write lines of code, each line does a specific thing, it completes an action for us. \
We call a fragment of code that produces a value an ***expression*** but when we group these together we can call them a ***function***.
We create functions because often, to complete one action, we cannot do this in a one-liner expression.
Another reason to write a function is if we are writing the same code multiple times. If we find ourselves doing this we might group that code together and give it a name. This means our code is easier to read. Writing a function is a bit like writing a load of code, and giving it a name so that we can easily access it later. \
There is an art to naming functions - for now, keep it simple and descriptive.

## Types of Functions
There are 3 types of functions:
| In-built | Libraries | Custom |
### In-built
These are the actions that are so fundamental to a programming language they come built into its core. \
The best way to research in built functions is through the documentation. \
Each data type has a whole host of built in functions we can use with it - these are called methods.

### Libraries
These are actions that so many people want to use that developers have grouped together and created collections of code for us to reuse. \
Some well-known JavaScript libraries include...
- [moment](https://momentjs.com/) - a time and data parser
- [axios](https://github.com/axios/axios) (slight improvements to the fetch API flow)
- [GreenSock](https://greensock.com/) (for web animations)

And of course, the mother of controversy, bringer of memes... [jQuery](https://jquery.com/). It offers a lot but does get a lot of hate due to a past trend to use almost exclusively jQuery instead of 'vanilla' JavaScript. Even [Bootstrap](https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/) is dropping jQuery for v5. The truth is that many sites do still use it so it's worth having a look at it so you can identify and jump in when required but we highly recommend not using it in all (or even most) of your projects. jQuery's most-used features are DOM manipulation, ajax flow and some animation, although it does offer more.

### Custom
If a solution for the action you are trying to take in not built-in or available in a library, you'll need to make a custom function.

***

## Writing Functions
### Declaring a function
This is the syntax for a named function declaration.
```js
function myFirstFunction(){
 // do this stuff
}
```
Note the essentials:
- `function` keyword
- function's name
- parentheses
- open and close of the function block with `{ }`

### Invoking a function
Once a function has been declared, you can invoke (run) it by stating the name of the function and adding the invocation parentheses:
```js
myFirstFunction()
```

### Parameters & Arguments
Often, your function will need some kind of input in order to do its job. \
There is a subtle difference in the usage of these two words and only the strictest of humans would truly be mad at you for getting them mixed up: \
**Parameters** are variables you declare in a function definition. \
**Arguments** are the pieces of data you pass in when you invoke the function.
```js
function addUp (x, y) { // x is our parameter here
  console.log(x + y)
}

addUp(4, 5) // 4 and 5 are our arguments that will be assigned out to x and y as declared in our function definition
```

### Default Parameters
In some cases we might not need all of the parameters each time we run a function, therefore we might give it some defaults. \
```js
function addUp (x, y = 2) { // y has been given a default parameter of 2
  console.log(x + y)
}

addUp(7) //=> 9
addUp(7, 5) //=> 12
```

## Return Statements

## Scope

## Arrow Functions

## Recursion
