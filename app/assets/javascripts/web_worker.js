self.addEventListener('message', function(e) {
  var count = 0;
  setInterval(function() {
    self.postMessage(count);
    count++;
  }, 500);
}, false);
