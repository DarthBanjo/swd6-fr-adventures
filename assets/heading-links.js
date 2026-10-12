(function () {
  function addLinks() {
    var heads = document.querySelectorAll('.body-inner h2[id], .body-inner h3[id]');
    heads.forEach(function (h) {
      if (h.querySelector('.heading-link')) return;
      var link = document.createElement('a');
      link.href = '#' + h.id;
      link.className = 'heading-link';
      link.textContent = '#';
      link.setAttribute('aria-label', 'Link to this section');
    });
  }

  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      addLinks();
    }, 100);
  }

  document.addEventListener('DOMContentLoaded', function () {
    addLinks();
    new MutationObserver(schedule).observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();