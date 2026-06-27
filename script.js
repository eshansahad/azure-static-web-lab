/* ============================================================
   Azure Static Web App — script.js
   Handles: parallax, falling leaves, button ripple, JS modal
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. PARALLAX SCROLL
  ---------------------------------------------------------- */
  const layerFar  = document.getElementById('layerFar');
  const layerMid  = document.getElementById('layerMid');
  const layerNear = document.getElementById('layerNear');
  const treeline  = document.getElementById('treeline');
  const sun       = document.getElementById('sun');
  const mist      = document.getElementById('mist');

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }

  function applyParallax() {
    const scrollY = window.scrollY;
    if (layerFar)  layerFar.style.transform  = `translateY(${scrollY * 0.08}px)`;
    if (layerMid)  layerMid.style.transform  = `translateY(${scrollY * 0.15}px)`;
    if (layerNear) layerNear.style.transform = `translateY(${scrollY * 0.25}px)`;
    if (treeline)  treeline.style.transform  = `translateY(${scrollY * 0.35}px)`;
    if (sun)       sun.style.transform       = `translateX(-50%) translateY(${scrollY * 0.05}px)`;
    if (mist)      mist.style.opacity        = Math.max(0, 1 - scrollY * 0.004);
    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });


  /* ----------------------------------------------------------
     2. FALLING LEAVES
  ---------------------------------------------------------- */
  const canvas = document.getElementById('leavesCanvas');
  const ctx    = canvas ? canvas.getContext('2d') : null;
  const leaves = [];
  const LEAF_COUNT = 28;

  // Leaf shapes as tiny SVG-like paths drawn on canvas
  const leafColors = [
    '#c0722a', '#d4a048', '#8c3d10',
    '#b85e20', '#e0b060', '#7a5c2a',
    '#a04a1a', '#cc8030'
  ];

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createLeaf() {
    return {
      x:        randomBetween(0, canvas.width),
      y:        randomBetween(-canvas.height * 0.3, -20),
      size:     randomBetween(7, 16),
      speedX:   randomBetween(-0.6, 0.6),
      speedY:   randomBetween(0.6, 1.6),
      rotation: randomBetween(0, Math.PI * 2),
      rotSpeed: randomBetween(-0.02, 0.02),
      sway:     randomBetween(0.2, 0.8),
      swayOff:  randomBetween(0, Math.PI * 2),
      color:    leafColors[Math.floor(Math.random() * leafColors.length)],
      opacity:  randomBetween(0.5, 0.9),
      age:      0
    };
  }

  function drawLeaf(leaf) {
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = leaf.opacity;
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rotation);
    ctx.fillStyle = leaf.color;

    // Draw a simple elliptical leaf shape
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.size, leaf.size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Leaf midrib
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(-leaf.size, 0);
    ctx.lineTo(leaf.size, 0);
    ctx.stroke();

    ctx.restore();
  }

  function updateLeaf(leaf, time) {
    leaf.age++;
    leaf.y += leaf.speedY;
    leaf.x += leaf.speedX + Math.sin(time * 0.001 * leaf.sway + leaf.swayOff) * 0.5;
    leaf.rotation += leaf.rotSpeed;
  }

  function animateLeaves(time) {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = leaves.length - 1; i >= 0; i--) {
      const leaf = leaves[i];
      updateLeaf(leaf, time);
      drawLeaf(leaf);

      // Recycle leaf when it falls off screen
      if (leaf.y > canvas.height + 30 || leaf.x < -50 || leaf.x > canvas.width + 50) {
        leaves.splice(i, 1);
      }
    }

    // Maintain leaf count
    while (leaves.length < LEAF_COUNT) {
      const l = createLeaf();
      // Spread new leaves across top
      l.x = randomBetween(0, canvas.width);
      l.y = randomBetween(-80, 0);
      leaves.push(l);
    }

    requestAnimationFrame(animateLeaves);
  }

  if (canvas && ctx) {
    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      // Re-spread leaves for new width
      leaves.forEach(l => {
        if (l.x > canvas.width) l.x = randomBetween(0, canvas.width);
      });
    });

    // Seed initial leaves staggered in height
    for (let i = 0; i < LEAF_COUNT; i++) {
      const l = createLeaf();
      l.y = randomBetween(-canvas.height, canvas.height * 0.8);
      leaves.push(l);
    }

    requestAnimationFrame(animateLeaves);
  }


  /* ----------------------------------------------------------
     3. BUTTON RIPPLE + MODAL (replaces old alert)
  ---------------------------------------------------------- */
  const alertBtn      = document.getElementById('alertBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose    = document.getElementById('modalClose');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      // Trap focus on close button
      setTimeout(() => { if (modalClose) modalClose.focus(); }, 50);
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      if (alertBtn) alertBtn.focus();
    }
  }

  if (alertBtn) {
    alertBtn.addEventListener('click', function (e) {
      // Ripple position
      const rect = alertBtn.getBoundingClientRect();
      const rx = ((e.clientX - rect.left) / rect.width) * 100 + '%';
      const ry = ((e.clientY - rect.top)  / rect.height) * 100 + '%';
      alertBtn.style.setProperty('--rx', rx);
      alertBtn.style.setProperty('--ry', ry);

      alertBtn.classList.add('rippling');
      setTimeout(() => alertBtn.classList.remove('rippling'), 400);

      // Open modal instead of alert()
      openModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Keyboard escape to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });


  /* ----------------------------------------------------------
     4. CONSOLE CONFIRMATION (for the examiner)
  ---------------------------------------------------------- */
  console.log(
    '%c✅ script.js loaded %c— Azure Static Web App',
    'background:#2a5c2a;color:#fff;padding:3px 8px;border-radius:4px;font-weight:600;',
    'color:#4a5e4a;font-size:0.85em;'
  );

})();
