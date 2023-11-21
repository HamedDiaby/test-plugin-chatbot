// chatbot.js
(function() {
  function initChatbot() {
    // Création de l'élément UI pour le chatbot
    var chatbotUI = document.createElement('div');
    chatbotUI.style.position = 'fixed';
    chatbotUI.style.bottom = '20px';
    chatbotUI.style.right = '20px';
    chatbotUI.style.zIndex = '999999';
    
    // Ajout de style supplémentaire pour l'esthétique
    chatbotUI.style.background = 'white';
    chatbotUI.style.border = '1px solid #ddd';
    chatbotUI.style.borderRadius = '5px';
    chatbotUI.style.padding = '10px';
    chatbotUI.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

    // Création des éléments internes
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'chatbot-input';
    inputField.placeholder = 'Posez votre question...';
    inputField.style.width = '200px';

    var outputDiv = document.createElement('div');
    outputDiv.id = 'chatbot-output';

    // Assemblage des éléments
    chatbotUI.appendChild(inputField);
    chatbotUI.appendChild(outputDiv);

    // Ajout de l'UI du chatbot à la page
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
