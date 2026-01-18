// Script utama portfolio
console.log("Portfolio Nadya loaded successfully!");

// Contoh fitur kecil (opsional)
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.textContent = `© ${year} Nadya Portfolio`;
  }
});

