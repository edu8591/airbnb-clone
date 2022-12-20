import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";

export default class extends Controller {
  static targets = ['openUserMenu']

  // connect() {
  //   console.log(this.dropdownTarget)
  //   console.log('enter:', enter)
  //   console.log('leave:', leave)
  //   console.log('toggle:', toggle)
  // }

  toggleDropDownMenu() {
    toggle(this.openUserMenuTarget)
  }
}
