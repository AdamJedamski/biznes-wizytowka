// Simple client-side form handler (no backend)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Dziękujemy! Twoja wiadomość została przesłana (symulacja).');
  this.reset();
});
