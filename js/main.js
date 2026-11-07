// Année du pied de page
document.getElementById('annee').textContent = new Date().getFullYear();

// Fermer le menu mobile après un clic sur un lien
document.querySelectorAll('#menu .nav-link, #menu .btn').forEach(function (a) {
  a.addEventListener('click', function () {
    var el = document.getElementById('menu');
    if (el.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(el).hide();
  });
});

// Bouton retour en haut
var haut = document.getElementById('haut');
window.addEventListener('scroll', function () {
  haut.classList.toggle('show', window.scrollY > 500);
});
haut.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// Formulaire : validation Bootstrap puis ouverture d'une conversation WhatsApp
var WHATSAPP_FONDATION = '237659965357';
var form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;
  var corps = encodeURIComponent(
    'Bonjour FBHSF, je vous contacte depuis le site.\n\n' +
    'Nom : ' + document.getElementById('nom').value + '\n' +
    'Téléphone : ' + document.getElementById('telephone').value + '\n' +
    'Objet : ' + document.getElementById('objet').value + '\n\n' +
    document.getElementById('message').value
  );
  window.open('https://wa.me/' + WHATSAPP_FONDATION + '?text=' + corps, '_blank', 'noopener');
});
