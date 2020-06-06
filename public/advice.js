import advices from "./advice-list.js";

(function newAdvice() {
  var randomTopic = Math.floor(Math.random() * advices.length);
  var topic = advices[randomTopic];
  var randomAdvice = Math.floor(Math.random() * topic.advices.length);
  var advice = topic.advices[randomAdvice];

  document.getElementById('advice-display').innerHTML = advice;
  document.getElementById('advice-topic-display').innerHTML = topic.topic;
})();
