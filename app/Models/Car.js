import { generateId } from "../utils.js";
console.log(0)
export default class Car {
  // Object Destructuring
  constructor({ make, model, year, price, img, description }) {
    console.log(2);
    this.id = generateId()
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.img = img
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.make} - ${this.model} - ${this.year}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }

  get formTemplate(){
    return `
    <div class="col">
                <form onsubmit="app.carsController.createCar()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="make">Make</label>
                        <input type="text" name="make" id="make" class="form-control" placeholder="Make...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="model">Model</label>
                        <input type="text" name="model" id="model" class="form-control" placeholder="Model...">
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
                    <button type="submit" class="btn btn-outline-success">Add Car</button>
                </form>
            </div>
    `

  }
}