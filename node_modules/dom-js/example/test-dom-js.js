var util = require('util');
var DomJS = require("dom-js").DomJS;

var domjs = new DomJS();

console.log("\nExample XML");
var string = '<xml><!-- the comment --><elem someAtt="fat&apos;red">Hello &amp; World</elem><elem otherAtt="val1"/><elem lastAtt="val1"/></xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
	console.log("dom.children[1].text() : " + dom.children[1].text());
});

domjs.reset(); //before reuse

console.log("\nMinimal XML");
string = '<xml/>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse

console.log("\nLeading comments are dropped");
string = '<!-- leading comments are dropped--><xml/>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse

console.log("\nEmbeded comments are kept ");
string = '<xml><!-- embeded comments are kept --></xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse

console.log("\nWhitespace is respected");
string = '<xml>\n<node/>\n</xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse

console.log("\nEmpty tags are always compressed to the short form");
string = '<xml></xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});
