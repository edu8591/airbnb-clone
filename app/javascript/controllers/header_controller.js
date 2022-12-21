import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";

export default class extends Controller {
  static targets = ['openUserMenu']

  toggleDropDownMenu() {
    toggle(this.openUserMenuTarget)
  }
  openAuthModal(event){
    event.preventDefault()
    this.#closeUserMenu()
    document.getElementById('modal-trigger').click() // Clicks element inside the modal controller
  }
  #closeUserMenu() {
    leave(this.openUserMenuTarget);
  }
}
