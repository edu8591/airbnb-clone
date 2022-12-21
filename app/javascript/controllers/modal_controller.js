import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition";

// Connects to data-controller="modal"
export default class extends Controller {
  static targets =['wrapper', 'backdrop', 'panel']
  // connect() {
  //   enter(this.wrapperTarget)
  //   enter(this.backdropTarget)
  //   enter(this.panelTarget)
  // }
  leave() {
    leave(this.wrapperTarget);
    leave(this.backdropTarget);
    leave(this.panelTarget);
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
