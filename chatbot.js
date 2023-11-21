// chatbot.js
(function() {
  function initChatbot() {
    // Vérifie si le chatbot existe déjà pour éviter les doublons
    if (document.getElementById('chatbot-container')) return;

    // Création de l'élément UI pour le chatbot
    var chatbotUI = document.createElement('div');
    chatbotUI.id = 'chatbot-container';
    chatbotUI.style.position = 'fixed';
    chatbotUI.style.bottom = '20px';
    chatbotUI.style.right = '20px';
    chatbotUI.style.zIndex = '999999';
    chatbotUI.style.background = '#f0f0f0';
    chatbotUI.style.border = '1px solid #ddd';
    chatbotUI.style.borderRadius = '10px';
    chatbotUI.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    chatbotUI.style.padding = '15px';
    chatbotUI.style.width = '300px';
    chatbotUI.style.maxHeight = '400px';
    chatbotUI.style.overflowY = 'auto';

    // Création de l'input
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'chatbot-input';
    inputField.placeholder = 'Posez votre question...';
    inputField.style.width = '100%';
    inputField.style.padding = '10px';
    inputField.style.marginTop = '10px';
    inputField.style.borderRadius = '5px';
    inputField.style.border = '1px solid #ccc';

    // Création de la div de sortie
    var outputDiv = document.createElement('div');
    outputDiv.id = 'chatbot-output';
    outputDiv.style.padding = '10px';
    outputDiv.style.background = '#fff';
    outputDiv.style.borderRadius = '5px';
    outputDiv.style.marginBottom = '10px';
    outputDiv.style.minHeight = '50px';
    outputDiv.style.border = '1px solid #ccc';

    // Assemblage des éléments
    chatbotUI.appendChild(outputDiv);
    chatbotUI.appendChild(inputField);

    // Ajout de l'UI du chatbot à la page
    document.body.appendChild(chatbotUI);

    // Événement pour gérer l'entrée de l'utilisateur
    inputField.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        var input = event.target.value;
        event.target.value = '';
        processInput(input, outputDiv);
      }
    });
  }

  function processInput(input, outputDiv) {
    // Traitement simple de l'entrée
    var response = "Vous avez dit : " + input;
    outputDiv.textContent = response;
  }

  window.initChatbot = initChatbot;
})();
