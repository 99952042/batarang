var html = document.getElementsByTagName('html')[0];

var eventProxyElement = document.createElement('div');
eventProxyElement.id = '__ngDebugElement';
eventProxyElement.style.display = 'none';
html.appendChild(eventProxyElement);

// inject into the application context from the content script context

var script = window.document.createElement('script');
script.src = chrome.extension.getURL('hint.bundle.js');

eventProxyElement.addEventListener('myCustomEvent', function () {
  var eventData = eventProxyElement.innerText;
  chrome.extension.sendMessage(eventData);
});

html.setAttribute('ng-hint', '');

html.appendChild(script);
