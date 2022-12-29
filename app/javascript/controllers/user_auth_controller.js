import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";


// Connects to data-controller="user-auth"
export default class extends Controller {
  static targets = ['exitBtn', 'panelTitle', 'backBtn', 'emailInput', 'emailAlert', 'mailValidationForm', 'signInForm', 'emailAlertText', 'emailField']
  connect() {
    console.log(this.emailFieldTarget);
  }

  submitForm() {
    if(this.emailInputTarget.value == '') {
      this.emailAlertTextTarget.innerText = "Email is required.";
      enter(this.emailAlertTarget);
    } else {
      fetch(
        `http://localhost:3000/api/v1/users_by_email?email=${this.emailInputTarget.value}`
      )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if(data.id) this.#displayForm(this.signInFormTarget)
      })
    }
  }
  resetForm(){
    this.emailFieldTarget.value = '';
    this.emailInputTarget.value = '';
    this.panelTitleTarget.innerText = 'Log in or sign up';
    leave(this.backBtnTarget);
    enter(this.exitBtnTarget);
    enter(this.mailValidationFormTarget);
    leave(this.signInFormTarget);
    leave(this.emailAlertTarget);
  }
  #displayForm(formToDisplay){
    this.panelTitleTarget.innerText = "Log in";
    leave(this.exitBtnTarget);
    enter(this.backBtnTarget);
    this.emailFieldTarget.value = this.emailInputTarget.value;
    leave(this.mailValidationFormTarget)
    enter(formToDisplay)
  }
}
