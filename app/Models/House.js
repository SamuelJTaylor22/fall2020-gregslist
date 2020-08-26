import { generateId } from "../utils.js";
console.log(0)
export default class House {
  // Object Destructuring
  constructor({ bed, bath, year, price, img, description }) {
    console.log(2);
    this.id = generateId() 
    this.bed = bed
    this.bath = bath
    this.year = year
    this.price = price
    this.img = img
    this.description = description
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.bed} Bedroom(s) - ${this.bath} Bathroom(s) - ${this.year}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }

}