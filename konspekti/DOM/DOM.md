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

# querySelector()