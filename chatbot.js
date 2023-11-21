// chatbot.js
(function() {
  function initChatbot() {
    // Création de l'élément UI pour le chatbot
    var chatbotUI = document.createElement('div');
    chatbotUI.innerHTML = '<input type="text" id="chatbot-input" placeholder="Posez votre question..."><div id="chatbot-output"></div>';
    document.body.appendChild(chatbotUI);

    // Événement pour gérer l'entrée de l'utilisateur
    document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        var input = event.target.value;
        event.target.value = '';
        processInput(input);
      }
    });
  }

  function processInput(input) {
    // Traitement simple de l'entrée
    var output = document.getElementById('chatbot-output');
    var response = "Vous avez dit : " + input;
    output.textContent = response;
  }

  window.initChatbot = initChatbot;
})();
