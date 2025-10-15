// Jelly cursor blob and button micro-interactions
(function () {
  var blob = document.querySelector('.cursor-blob');
  if (!blob) return;

  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var ease = 0.12; // springy smoothing

  function onMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
  }

  function tick() {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;
    blob.style.transform = 'translate(' + (currentX - 0) + 'px, ' + (currentY - 0) + 'px)';
    requestAnimationFrame(tick);
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  requestAnimationFrame(tick);

  // Button jelly press animation
  var buttons = document.querySelectorAll('a.button');
  buttons.forEach(function (btn) {
    btn.addEventListener('pointerdown', function () {
      btn.style.transition = 'transform 140ms cubic-bezier(.2,.7,.3,1)';
      btn.style.transform = 'translateY(2px) scale(0.97)';
    });
    ['pointerup', 'pointerleave', 'blur'].forEach(function (evt) {
      btn.addEventListener(evt, function () {
        btn.style.transform = '';
        btn.style.transition = '';
      });
    });
  });
})();
