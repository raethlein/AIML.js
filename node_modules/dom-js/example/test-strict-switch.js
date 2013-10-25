var util = require('util');
var DomJS = require("dom-js").DomJS;

var domjs = new DomJS();
/**
 * Not sure why any one would want to do this, but request comes from eddyb
 * Set strict to false, the XML elements all come out in UPPERCASE.
 * If that is a "feature" its a weird one!  I think strict is mean to be about namespaces.
 */
domjs.strict = false;

console.log("\nExample XML");
var string = '<?xml version="1.0" encoding="UTF-8"?>' +
	'<xml>' +
	'<a>a</a>' + 
	'<!-- the comment --><elem someAtt="fat &amp; red">Hello &quot;World&quot;</elem><elem otherAtt="val1"/><elem lastAtt="val1"/></xml>';
console.log(string);
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

domjs.reset(); //before reuse
