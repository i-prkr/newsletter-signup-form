const NewsletterForm = () => {

  // get elements
  const signupCard = document.getElementById("signup-card");
  const successCard = document.getElementById("success-card");
  const form = document.querySelector(".newsletter-form");
  const emailInput = document.querySelector(".newsletter-form__email-input");
  const errorMessage = document.querySelector(".newsletter-form__error");
  const userEmailText = document.getElementById("user-email-text");

  // add submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault(event);

    // check for valid email
    const userEmail = Object.fromEntries(new FormData(event.target)).userEmail;
    const correctEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userEmail);
    
    // if valid, show success card, if invalid show error
    if(correctEmail) {
      userEmailText.innerText = userEmail;
      successCard.classList.replace("hide","show");
      signupCard.classList.replace("show","hide");
    } else {
      emailInput.classList.add("newsletter-form__email-input-error");
      errorMessage.textContent = "Valid email required";
      errorMessage.style.visibility = "visible";
    }
  })
}

NewsletterForm();