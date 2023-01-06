import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="geolocation"
export default class extends Controller {
  // static targets = ['userCoords']
  connect() {
    // console.dir(this.userCoordsTarget)
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position)
      const {latitude, longitude} = position.coords
      this.element.dataset.userCoords = `[${latitude}, ${longitude}]`
    })
  }
}
