import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";

// Connects to data-controller="modal"
export default class extends Controller {
  static targets =['wrapper', 'backdrop', 'panel', 'emailInput', 'backBtn', 'exitBtn', 'panelTitle', 'backBtn']
  // connect() {
  //   enter(this.wrapperTarget)
  //   enter(this.backdropTarget)
  //   enter(this.panelTarget)
  // }
  leave() {
    leave(this.wrapperTarget);
    leave(this.backdropTarget);
    leave(this.panelTarget);
    leave(this.backBtnTarget)
    enter(this.exitBtnTarget)
    this.panelTitleTarget.innerText = "Log in or sign up";
    this.emailInputTarget.value = ''
    this.backBtnTarget.click()
  }

  showModal() {
    enter(this.wrapperTarget);
    enter(this.backdropTarget);
    enter(this.panelTarget);
  }
  closePanel(event) {
    if (!this.panelTarget.contains(event.target)) this.leave()
  }

}
