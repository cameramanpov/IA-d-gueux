function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatMessages = document.getElementById("chat-messages");

    // Ajouter le message de l'utilisateur
    chatMessages.innerHTML += '<div><strong>Utilisateur :</strong> ' + userInput + '</div>';

    // Répondre avec le message de l'IA
    chatMessages.innerHTML += '<div><strong>IA :</strong> hum fesse fesse fesse, c'est trop bon</div>';

    // Effacer le champ de saisie
    document.getElementById("user-input").value = '';

    // Faire défiler vers le bas pour voir la dernière réponse
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
