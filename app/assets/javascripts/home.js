var worker = new Worker('/assets/web_worker.js');


var appTitle = 'PERFORMANTUS';
worker.addEventListener('message', function(e) {
  document.title = appTitle[e.data % 12];
}, false);

worker.postMessage('Hello World');
// var count = 0;
// setInterval(function() {
//   document.title = appTitle[count % 12];
//   count++;
// }, 500);
