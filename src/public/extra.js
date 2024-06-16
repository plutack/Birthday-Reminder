
document.addEventListener('htmx:afterRequest', function(evt) {
      if (evt.detail.target.id === 'result') {
        setTimeout(() => {
          evt.detail.target.innerHTML = '';
        }, 5000); // 5 seconds
      }
    });