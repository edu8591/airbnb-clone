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
    "emailAlertText",
    "emailField",
  ];
  connect() {
    console.log(axios);
  }

  submitForm() {
    if (this.emailInputTarget.value == "") {
      this.emailAlertTextTarget.innerText = "Email is required.";
      enter(this.emailAlertTarget);
    } else {
      axios.get("/api/v1/users_by_email", {
        params: { email: this.emailInputTarget.value },
        headers:{'ACCEPT': 'application/json'}
      }).then((response) => {
        this.#displayForm(this.signInFormTarget);
      }).catch((response)=> {
        console.log('failed response:', response);
        console.log('Pending ot implement signup form');
      })
    }
  }
  resetForm() {
    this.emailFieldTarget.value = "";
    this.emailInputTarget.value = "";
    leave(this.backBtnTarget)
      .then(() => leave(this.signInFormTarget))
      .then(() => leave(this.emailAlertTarget))
      .then(() => enter(this.exitBtnTarget))
      .then(() => enter(this.mailValidationFormTarget));
    this.panelTitleTarget.innerText = "Log in or sign up";
  }
  #displayForm(formToDisplay) {
    this.emailFieldTarget.value = this.emailInputTarget.value;
    leave(this.exitBtnTarget)
      .then(() => leave(this.mailValidationFormTarget))
      .then(() => enter(this.backBtnTarget))
      .then(() => enter(formToDisplay));
    this.panelTitleTarget.innerText = "Log in";
  }
}
