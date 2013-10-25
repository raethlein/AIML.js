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
<br/>
<b>For example:</b><br/>
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
aimlInterpreter.findAnswerInLoadedAIMLFiles('Who are you?', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Give me a letter.', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test srai in random.', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test wildcard What is my name', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr tag', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr in random', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the wildcard pattern!', callback);
</code></pre>
<b>Supported AIML tags:</b><pre>
\<bot name="<i>NAME</i>"/\>
\<get name="<i>NAME</i>"/\>
\<set name="<i>NAME</i>">TEXT</set\>
\<random\>\<li\><i>A</i>\</li\>\<li\><i>B</i>\</li\>\<li\><i>C</i>\</li\>…\</random\>
\<srai\><i>PATTERN TEXT</i>\</srai\>
\<sr/\></pre>





