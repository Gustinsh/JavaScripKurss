# Node
* Node.js servera pusē organizē
```node.nodeType```
## node type
* For example, <body> is a child node of the <html> node, and <html> is the parent of the <body> node.
* The <body> node is the sibling of the <head> node because they share the same immediate parent, which is the <html> element.
* In the DOM tree, a node has relationships with other nodes
* input types :https://www.w3schools.com/tags/tag_input.asp
* input: https://www.w3schools.com/tags/att_input_type.asp
# Elements
 ```getElementById()```
``` <div id="root"></div> ```
* The id is used to uniquely identify an HTML element within the document. By rules, the id root is unique within the document; no other elements can have this root id.
```let element = document.getElementById(id); ```
* Once you selected an element, you can add styles to the element, manipulate its attributes, and traversing to parent and child elements.

```getElementsByTagName() ```
* The ```getElementsByTagName()``` method accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.
* The return collection of the ```getElementsByTagName()``` is live, meaning that it is automatically updated when elements with the matching tag name are added and/or removed from the document.
```getElementsByClassName()``` 
piemērs:
```<button class="btn btn-primary">Save</button>```
* The classes allows you to use the CSS to match elements. For example:
```.btn {```
   ```background-color: red;```
``` } ``` 
* gan dokumenta ietvaros, gan HTML

* ID viens unikāls vārds
* class
Linki, ko kolēģi iemeta pētīšanai:
* https://www.youtube.com/watch?v=Iv93yjdvkWI
* https://www.alibabacloud.com/blog/understanding-the-dom-tree-and-nodes_596231
* https://www.w3.org/People/Raggett/book4/ch02.html -
* https://www.oreilly.com/library/view/web-standards-programmers/9780764588204/9780764588204_the_history_of_the_dom.html - The History of the DOM
* https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

# Traversing elements
``` .childNodes ``` mezgli ar tekstu
``` .children```tikai mezgli, bez teksta


# querySelector()
* https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
* Note that the NodeList is an array-like object, not an array object. However, in modern web browsers, you can use the forEach() method like the one in the array object.
* ```document.querySelector('h1')``` paņem visu h1
```   let note = document.querySelector('.note'); ```
```let elements = document.querySelectorAll('<div>, <p>');```
# parentNode 
```let parent = node.parentNode; ``` The parentNode is read-only.
```let firstChild = parentElement.firstChild;  ```

# JavaScript CreateElement
```let element = document.createElement(htmlTag);```
*  to create a new <div> element:
```let div = document.createElement('div'); ```
* And add an HTML snippet to the div:
``` div.innerHTML = '<p>CreateElement example</p>';```
* To attach the div to the document, you use the appendChild() method:
```document.body.appendChild(div);```
* to create scipt element:
``` let script = document.createElement('script');```
```script.src = '/lib.js';```
```document.body.appendChild(script);```

``` function loadJS(url) {```
    ``` let script = document.createElement('script');```
    ``` script.src = url;```
    ``` document.body.appendChild(script);```
``` }```
``` loadJS('/lib.js');```

# textContent vs. innerText (better use textContent)
* On the other hand, the innerText takes the CSS style into account and returns only human-readable text. For example:
* ``` let note = document.getElementById('note');```
``` note.textContent = 'This is a note';```
* Therefore, you should not set the innerHTML to the content that you have no control over or you will face a potential security risk.
* innerHTML you should use it only when the data comes from a trusted source like a database.
``` let fragment = document.createDocumentFragment();```
* ```parentNode.insertBefore(newNode, existingNode);```
* JavaScript DOM hasn’t supported the insertAfter() method yet.
* Use the insertBefore() method and the nextSibling property to insert a new before an existing node as a child of a parent node.
* Dokumentu fragments, ja atdod dokumentam, fragments kļūst tukšs
* The append() method will insert DOMString objects as Text nodes. at the end
* !Note that a DOMString is a UTF-16 string that maps directly to a string. 
Differences	      append()	                  appendChild()
Return value	   undefined	               The appended Node object
Input	            Multiple Node Objects    	A single Node object
Parameter Types	Accept Node and DOMString	Only Node
* The prepend() method inserts DOMString objects as Text nodes. Note that a DOMString is a UTF-16 string that directly maps to a string.
* prepend() beigās
* The prepend() method inserts a set of Node objects or DOMString objects after the first child of a parent node:
# Working with Attributes
* When the web browser loads an HTML page, it generates the corresponding DOM objects based on the DOM nodes of the document.
``` <input type="text" id="username">```
The web browser will generate an HTMLInputElement object.

The input element has two attributes:
* The type attribute with the value text.
* The id attribute with the value username.

The generated HTMLInputElement object will have the corresponding properties:

* The input.type with the value text.
* The input.id with the value username.

In other words, the web browser will automatically convert attributes of HTML elements to properties of DOM objects.

element.getAttribute(name) – get the attribute value
element.setAttribute(name, value) – set the value for the attribute
element.hasAttribute(name) – check for the existence of an attribute
element.removeAttribute(name) – remove the attribute
* Note that element.attributes is a NamedNodeMap, not an Array, therefore, it has no Array’s methods.
* The value of an attribute is always a string. However, when the attribute is converted to the property of a DOM object, the property value can be a string, a boolean, an object, etc.
* If you want to add a custom attribute to an element, you should prefix it with the data- e.g., data-secured because all attributes start with data- are reserved for the developer’s uses.
## element.setAttribute(name, value);
* The name specifies the attribute name whose value is set. It’s automatically converted to lowercase if you call the setAttribute() on an HTML element.
* The value specifies the value to assign to the attribute. It’s automatically converted to a string if you pass a non-string value to the method.
 * Note that the disabled attribute is special because it is a Boolean attribute. If a Boolean attribute is present, whatever value it has, the value is considered to be true. To set the value of a Boolean attribute to false, you need to remove the entire attribute using the removeAttribute() method.
* The getAttribute() accepts an argument which is the name of the attribute from which you want to return the value.
 * Note that you can use the hasAttribute() method to check if the attribute exists on the element before getting its value.