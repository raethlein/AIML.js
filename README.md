AIML.js
=======

AIML Interpreter written in node.js

AIMLInterpreter is a module that allows you to parse AIML files and to find the correct answer to a given message.

Installation
$ npm install AIMLInterpreter

Dependencies
fs
dom-js

With new AIMLInterpreter(botAttributes) one can create a new interpreter object. botAttributes is an JSON-Object that can contain attributes of the bot one wants to use in AIML files. ({name: ‘Bot’, age:’42’}).
This object has a function called loadAIMLFilesIntoArray(fileArray) which receives an array of AIML files. This function loads the AIML file into memory.
Furthermore, the object has a function called findAnswerInLoadedAIMLFiles(clientInput, cb) which receives a message and a callback. The callback is called when an answer was found. 
The callback of findAnswerInLoadedAIMLFiles should look like this: callback(result, wildCardArray)
Result is the answer from the AIML file and wildCardArray stores the values of all wildcardInputs passed previously from the client.	

For example:
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

Supported AIML tags:
\<bot name='NAME'/\>
\<get name='NAME'/\>
\<set name='NAME'>TEXT</set\>
\<random\>\<li\>A\</li\>\<li\>B\</li\>\<li\>C\</li\>…\</random\>
\<srai\>PATTERN TEXT\</srai\>
\<sr/\>





