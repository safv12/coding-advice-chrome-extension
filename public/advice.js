import advices from "./advice-list.js";

(function newAdvice() {
  var randomAdvice = Math.floor(Math.random() * advices.length);
  var advice = advices[randomAdvice];
  document.getElementById('advice-display').innerHTML = advice[1];
  document.getElementById('advice-topic-display').innerHTML = advice[0];
})();
