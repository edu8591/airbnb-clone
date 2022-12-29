import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";


// Connects to data-controller="user-auth"
export default class extends Controller {
  static targets = ['exitBtn', 'panelTitle', 'backBtn', 'emailInput', 'emailAlert', 'mailValidationForm']
  connect() {
    console.log('connected to user_auth controller')
  }
  submitForm() {
    if(this.emailInputTarget.value == '') {
      enter(this.emailAlertTarget);
    } else {
      this.#toggleForms()
    }
  }
  #toggleForms() {
    this.panelTitleTarget.innerText = 'Log in'
    toggle(this.exitBtnTarget)
    toggle(this.backBtnTarget)
    leave(this.emailAlertTarget);
  }
}
