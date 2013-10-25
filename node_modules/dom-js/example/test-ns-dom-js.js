var util = require('util');
var DomJS = require("dom-js").DomJS;

var domjs = new DomJS();

/*
 * N.B. dont really support namespaces but it does not break. 
 */
console.log("\nExample XML With a namespace");
var string = '<ns:xml><!-- the comment --><ns:elem someAtt="fat &amp; red">Hello &amp; World</ns:elem></ns:xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse

