window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.style.backgroundColor = "#000000e0"; // updated background
    header.style.backdropFilter = "blur(10px)"; // updated blur
    header.style.webkitBackdropFilter = "blur(10px)";
    header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.4)"; // stronger shadow
    header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)"; // slightly visible border
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.boxShadow = "none";
    header.style.borderBottom = "none";
  }
});

// ✅ Run on page load too
window.dispatchEvent(new Event("scroll"));
