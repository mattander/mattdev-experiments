"use strict";

function addMessage(message) {
  let el = document.createTextNode(message);
  messages.appendChild(el);
}

addMessage('welcome');
