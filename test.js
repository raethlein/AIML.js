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
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test wildcard What is my name?', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr tag', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test sr in random', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the star tag', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the that tag', callback)
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test that-tag. match',callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test that-tag. dont match', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('Test the wildcard pattern!', callback);