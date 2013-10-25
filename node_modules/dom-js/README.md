# dom-js #

dom-js is a node module that creates a DOM from a String using sax-js.

DomJS has a parse() method  that takes a string and a callback which is used when the DOM is ready, or if there is an error.

The object returned contains the root Element parsed to JavaScript objects.

dom-js returns the following object types

* Element 
* Text
* Comment
* CDATASection
* ProcessingInstruction (only contained in the root Element)

An Element has a name, a map of attributes, and an array of children, so you can find everything.

You get a couple of convenience methods on Element   text()  and  firstChild()  usage is hopefully obvious and save some boiler plate null checking.

The Element object has a method toXml() which returns a String with whitespace in tact.

For example 

    var util = require('util');
    var DomJS = require("dom-js").DomJS;

    var domjs = new DomJS();

    var string = '<xml><!-- the comment --><elem someAtt="fat &amp; red">Hello &amp; World</elem></xml>';
    domjs.parse(string, function(err, dom) {
    	console.log(util.inspect(dom, false, 23));
    	console.log("serializes to : " + dom.toXml());
    });


## Examples

The /example/ folder in the npm package includes examples that console.log() the returned object.

## Gotchas (that I can fix if it bothers anyone)

An empty tag <a></a>  will always be serialized in the short form <a/>.

ProcessingInstructions i.e. <?xml version="1.0" encoding="UTF-8"?>  are ignored and dropped by default, for backwards compatibility.
If you want to include processing instructions set the parseProcessingInstructions flag to true before calling parse().

    var domjs = new DomJS();
    domjs.parseProcessingInstructions = true;
   
The first|root Element will contain an array called processingInstructions if the input document has any, otherwise processingInstructions is undefined.
Output of each processing instruction is always on a newline even if whitespace is different in the input document.

Sax strict parsing is on by default, and can be turned off by setting the strict flag.

    var domjs = new DomJS();
    domjs.strict = false;

An instance of DomJS should only be used once, but if you must reuse, call reset() before re-calling parse(). 
reset() does NOT reset the strict or processingInstructions flags.

