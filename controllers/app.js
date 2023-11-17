function scrollToForm() {
  // Get the position of the form section
  const formSection = document.getElementById("form-section");
  const position = formSection.offsetTop;

  // Scroll to the form section
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
