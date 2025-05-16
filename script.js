document.addEventListener('DOMContentLoaded', () => {
  const v = document.getElementById('bgVideo');
  if (!v) return;
  let rev = false;
  v.addEventListener('ended', () => {
    rev = !rev;
    v.playbackRate = rev ? -0.8 : 0.8;
    v.currentTime  = rev ? v.duration - 0.01 : 0.01;
    v.play();
  });
});
