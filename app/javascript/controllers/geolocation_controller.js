import { Controller } from "@hotwired/stimulus"
import { getDistance, convertDistance } from "geolib";

// Connects to data-controller="geolocation"
export default class extends Controller {
  static targets = ['property']
  connect() {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      this.element.dataset.userCoords = `{"latitude": "${latitude}", "longitude": "${longitude}"}`

      this.propertyTargets.forEach((property) => {
        const from = this.element.dataset.userCoords;
        const to = property.dataset.propertyCoords;
        property.querySelector("[data-distance-away]").innerText = `${this.#distance( from, to )} km away`;
      } )

    })
  }

  #distance(from, to) {
    return `${Math.ceil(convertDistance(getDistance(JSON.parse(from), JSON.parse(to)), 'km'))}`
  }
}
