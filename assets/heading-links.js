document.addEventListener('DOMContentLoaded', function () {
var heads = document.querySelectorAll('.body-inner h2[id], .body-inner h3[id]');
heads.forEach(function (h) {
var link = document.createElement('a');
link.href = '#' + h.id;
link.className = 'heading-link';
link.textContent = '#';
link.setAttribute('aria-label', 'Link to this section');
h.appendChild(link);
var up = document.createElement('a');
up.href = '#contents';
up.className = 'heading-link';
up.textContent = '↑';
up.setAttribute('aria-label', 'Back to contents');
h.appendChild(up);
});
});