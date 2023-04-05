let stickySection = [...document.querySelectorAll(".sticky")];

function animate() {
  for (let i = 0; i < stickySection.length; i++) {
    let { top } = stickySection[i].parentElement.getBoundingClientRect();
    let transTop = top > 0 ? 0 : top * -1;
    if (transTop >= 1000) transTop = 1000;

    if (top <= 0 && i !== stickySection.length - 1) {
      stickySection[i].style.filter = `blur(${0 + transTop * 0.05}px)`;
      stickySection[i].style.transform = `scale3d(${1 - transTop * 0.001}, ${
        (1 - transTop * 0.001, 1)
      })`;
    }
  }
  requestAnimationFrame(animate);
}

animate();
