var util = require('util');
var DomJS = require("dom-js").DomJS;

var domjs = new DomJS();

var string = '<xml><elem>Hello &amp; World</elem></xml>';

domjs.parse(string, function(err, dom) {
	
	// A single child Text node can be read with just text()
	console.log( dom.firstChild().text() );
	console.log("serializes to : " + dom.toXml());

	// replacing with a new Text node has the setText() convenience method
	dom.firstChild().setText("Goodbye so called 'World'");
	
	console.log(dom.firstChild().text());
	console.log("serializes to : " + dom.toXml());
	
});

