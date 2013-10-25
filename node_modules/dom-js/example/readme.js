var util = require('util');
var DomJS = require("dom-js").DomJS;

var domjs = new DomJS();

var string = '<xml><!-- the comment --><elem someAtt="fat &amp; red">Hello &amp; World</elem></xml>';
domjs.parse(string, function(err, dom) {
	console.log(util.inspect(dom, false, 23));
	console.log("serializes to : " + dom.toXml());
});

