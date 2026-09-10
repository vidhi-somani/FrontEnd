// Minimal JS — just enough interactivity to make the static UI feel alive.
// All layout and styling lives in HTML/CSS; this file only toggles state.

document.addEventListener('DOMContentLoaded', () => {

  // ---- Dynamic greeting based on time of day ----
  const greeting = document.getElementById('greeting');
  if (greeting) {
    const hour = new Date().getHours();
    let text = 'Good evening';
    if (hour < 12) text = 'Good morning';
    else if (hour < 18) text = 'Good afternoon';
    greeting.textContent = text;
  }

  // ---- Play / pause toggle on the main player button ----
  const playToggle = document.querySelector('.play-toggle');
  const PLAY_ICON = '<path d="M8 5.5v13a1 1 0 001.5.87l11-6.5a1 1 0 000-1.74l-11-6.5A1 1 0 008 5.5z"/>';
  const PAUSE_ICON = '<path d="M8 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1z"/>';

  if (playToggle) {
    playToggle.addEventListener('click', () => {
      const isPlaying = playToggle.classList.toggle('is-playing');
      playToggle.querySelector('svg').innerHTML = isPlaying ? PAUSE_ICON : PLAY_ICON;
      playToggle.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
    });
  }

  // ---- Any card/quick-card play button also flips the main toggle ----
  document.querySelectorAll('.card .play-btn, .quick-card .play-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (playToggle && !playToggle.classList.contains('is-playing')) {
        playToggle.click();
      }
    });
  });

  // ---- Seekable progress bar ----
  const progressBar = document.querySelector('.progress-bar');
  const progressFill = document.querySelector('.progress-fill');
  if (progressBar && progressFill) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      progressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    });
  }

  // ---- Adjustable volume bar ----
  const volumeBar = document.querySelector('.volume-bar');
  const volumeFill = document.querySelector('.volume-fill');
  if (volumeBar && volumeFill) {
    volumeBar.addEventListener('click', (e) => {
      const rect = volumeBar.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      volumeFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    });
  }

  // ---- Sidebar filter pills (Playlists / Artists / Albums) ----
  document.querySelectorAll('.pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // ---- Sidebar main nav (Home / Search) ----
  document.querySelectorAll('.main-nav .nav-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.main-nav .nav-item').forEach((n) => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

});