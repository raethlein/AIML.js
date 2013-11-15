AIML.js
=======

AIML Interpreter written in node.js<br/>
<br/>
AIMLInterpreter is a module that allows you to parse AIML files and to find the correct answer to a given message.<br/>

<b>Installation</b>
<pre>$ npm install aimlinterpreter</pre>
<br/>
<b>Dependencies</b><pre>
fs
dom-js</pre>
<br/>
<b>Description</b><br/>
With <i>new AIMLInterpreter(botAttributes)</i> one can create a new interpreter object. <i>botAttributes</i> is an JSON-Object that 
can contain attributes of the bot one wants to use in AIML files, e.g. ({name: "Bot", age:"42"}).<br/>
This object has a function called <i>loadAIMLFilesIntoArray(fileArray)</i> which receives an array of AIML files. 
This function loads the AIML file into memory.<br/>
Furthermore, the object has a function called <i>findAnswerInLoadedAIMLFiles(clientInput, cb)</i> which receives 
a message and a callback. The callback is called when an answer was found. 
The callback of <i>findAnswerInLoadedAIMLFiles</i> should look like this: <i>callback(result, wildCardArray)</i>.
Result is the <i>answer</i> from the AIML file and <i>wildCardArray</i> stores the values of all wildcardInputs passed previously from the client.	
<br/><br/>
<b>Example:</b><br/>
<pre><code>
AIMLInterpreter = require('./AIMLInterpreter');
var aimlInterpreter = new AIMLInterpreter({name:'WireInterpreter', age:'42'});
aimlInterpreter.loadAIMLFilesIntoArray(['./test.aiml.xml']);

var callback = function(answer, wildCardArray){
    console.log(answer + ' | ' + wildCardArray);
};

aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your name?', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('My name is Ben.', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is my name?', callback);
</code></pre><br/>
<b>Supported AIML tags:</b><pre>
&lt;bot name="<i>NAME</i>"/>
&lt;get name="<i>NAME</i>"/>
&lt;set name="<i>NAME</i>">TEXT&lt;/set>
&lt;random>&lt;li><i>A</i>&lt;/li>&lt;li><i>B</i>&lt;/li>&lt;li><i>C</i>&lt;/li>&lt;/random>
&lt;srai><i>PATTERN TEXT</i>&lt;/srai>
&lt;sr/>
&lt;star/>
&lt;that><i>TEXT</i>&lt;/that></pre>

