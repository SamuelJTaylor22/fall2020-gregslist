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

  get formTemplate(){
    return `
    <div class="col">
                <form onsubmit="app.housesController.createHouse()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="bed">Bedroom Amount</label>
                        <input type="text" name="bed" id="bed" class="form-control" placeholder="amount...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bath">Bathroom Amount</label>
                        <input type="text" name="bath" id="bath" class="form-control" placeholder="Bathroom...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="year">Year</label>
                        <input type="number" name="year" id="year" class="form-control" placeholder="Year..." min="1900"
                            max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add House</button>
                </form>
            </div>
    `

  }
}