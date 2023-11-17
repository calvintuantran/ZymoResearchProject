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

function formSubmit(event) {
  // Prevents Page refresh
  event.preventDefault();
  const name = document.getElementById("firstName").value;

  alert(`Thanks for submitting ${name}!`);

  // Clear the form
  document.getElementById("form").reset();
}
