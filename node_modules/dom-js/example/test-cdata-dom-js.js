var util = require('util');
var DomJS = require("dom-js").DomJS;
var domjs = new DomJS();

console.log("\nExample XML");
var string = '<xml><elem attrib="val1"><![CDATA[Hello "World"]]></elem></xml>';

console.log(string);

domjs.parse(string, function(err, dom) {

	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());

});

domjs.reset(); //before reuse