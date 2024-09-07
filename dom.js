//here we gonna create about document object model which is abbreviate know as DOM
// in dom we access the html code through js 
/*
    all the html tags or elements that can be accessed through js that elements are converted or 
    (treated as)to object and that special objects are called as document.
    this document is present in window object(these are nothing but the objects and function 
    belong to browser which can be used by js)
    this document object include all the html tags in it    
*/ 
// console.dir() this dir used to print all the propertise and function related to document or
// special objects

let re = document.getElementById("container");
console.dir(re);

let last = document.getElementsByTagName("body");
console.log(last);
//this is used detect the which type of element or document is ,it might be a class , id and tag
// it used to return the nodelist 
let para = document.querySelector("p")
// here we need pass the element as argu and it used to return the first element 

let thisclass = document.querySelectorAll("p");
// this used to return the all element and we need add it's corresponding symbol to it
// if it's class then . if it's id then # pretty simple 
console.log(thisclass);

/*
    Now it's about to verify their properties
    we can get value which mean to verify and we can set value which mean we can manipulate element 
*/

// tagname = it used to return the tag name this is how it's done 
// here we have a variable (thisclass.tagname)

console.log(thisclass.tagName)


//innerText

// Text Node: This is the actual text inside an element. For example, in the code:

// html
// Copy code
// <p>Hello, world!</p>
// "Hello, world!" is a text node inside the <p> element.

// Comment Node: This is a node for comments in the HTML, which won't be displayed on the page. For example:

// html
// Copy code
// <!-- This is a comment -->
// Anything inside <!-- --> is a comment node.

// Element Node: This is an HTML tag, like <div>, <p>, <span>, etc. Element nodes contain other nodes (like text, comments, or other elements). For example:

// html
// Copy code
// <div></div>
// <div> is an element node.
//this it's syntax of it 
//          object    tag  verify which child it has
console.log(document.body.childNodes)
let items = document.querySelector("div");
console.dir (items);