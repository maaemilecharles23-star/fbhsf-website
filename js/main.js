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

// Formulaire : validation Bootstrap puis ouverture du client e-mail
// TODO : remplacer EMAIL_FONDATION par l'adresse réelle (ou brancher Formspree / un script PHP)
var EMAIL_FONDATION = 'contact@exemple.org';
var form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;
  var sujet = encodeURIComponent('[Site FBHSF] ' + document.getElementById('objet').value);
  var corps = encodeURIComponent(
    'Nom : ' + document.getElementById('nom').value + '\n' +
    'E-mail : ' + document.getElementById('email').value + '\n\n' +
    document.getElementById('message').value
  );
  window.location.href = 'mailto:' + EMAIL_FONDATION + '?subject=' + sujet + '&body=' + corps;
});
