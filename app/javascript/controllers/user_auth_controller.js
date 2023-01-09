import { Controller } from "@hotwired/stimulus";
import { enter, leave } from "el-transition";
import axios from "axios";

// Connects to data-controller="user-auth"
export default class extends Controller {
  static targets = [
    "exitBtn",
    "panelTitle",
    "backBtn",
    "emailInput",
    "emailAlert",
    "mailValidationForm",
    "signInForm",
    "signUpForm",
    "emailAlertText",
    "emailField",
    "passwordField"
  ];

  submitForm() {
    if (this.emailInputTarget.value.length === 0) {
      this.#emailAlert("Email is required.")
    } else if (this.#invalidEmail(this.emailInputTarget.value)) {
      this.#emailAlert("Enter a valid email.");
    } else {
      axios.get("/api/v1/users_by_email", {
        params: { email: this.emailInputTarget.value },
        headers:{'ACCEPT': 'application/json'}
      }).then(() => {
        this.#displayForm(this.signInFormTarget);
      }).catch((response)=> {
        this.#displayForm(this.signUpFormTarget);
        console.log('failed response:', response);
        console.log('Pending ot implement signup form');
      })
    }
  }

  submitFormWithEnter(event) {
    if(event.key === 'Enter') this.submitForm()
  }

  resetForm() {
    this.emailFieldTargets.forEach(input => input.value = "");
    this.passwordFieldTargets.forEach(input => input.value = "");
    this.emailInputTarget.value = "";
    const form = this.signInFormTarget.classList.contains("hidden")
      ? this.signUpFormTarget
      : this.signInFormTarget;
    leave(this.backBtnTarget)
      .then(() => leave(form))
      .then(() => leave(this.emailAlertTarget))
      .then(() => enter(this.exitBtnTarget))
      .then(() => enter(this.mailValidationFormTarget));
    this.panelTitleTarget.innerText = "Log in or sign up";
    this.#resetEmailAlert()
  }

  #displayForm(formToDisplay) {
    // this.emailFieldTarget.value = this.emailInputTarget.value;
    this.emailFieldTargets.forEach(
      (field) => (field.value = this.emailInputTarget.value)
    );
    leave(this.exitBtnTarget)
      .then(() => leave(this.mailValidationFormTarget))
      .then(() => enter(this.backBtnTarget))
      .then(() => enter(formToDisplay));
    this.panelTitleTarget.innerText =
      formToDisplay === this.signInFormTarget ? "Log in" : "Sign up";
  }

  #invalidEmail(email){
    // checks validity of email
    return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  #emailAlert(message) {
    this.emailAlertTextTarget.innerText = message;
    this.emailInputTarget.parentElement.classList.remove("input-default");
    this.emailInputTarget.parentElement.classList.add("input-invalid");
    this.emailInputTarget.parentElement.children[0].classList.remove("text-gray-900");
    this.emailInputTarget.parentElement.children[0].classList.add("text-rose-500");
    enter(this.emailAlertTarget);
    this.emailInputTarget.focus()
  }

  #resetEmailAlert(){
    this.emailInputTarget.parentElement.classList.remove("input-invalid");
    this.emailInputTarget.parentElement.classList.add("input-default");
    this.emailInputTarget.parentElement.children[0].classList.remove("text-rose-500");
    this.emailInputTarget.parentElement.children[0].classList.add("text-gray-900");
    leave(this.emailAlertTarget);
  }
}
