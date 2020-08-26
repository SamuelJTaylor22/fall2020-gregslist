import carsService from "../Services/CarsService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawCars() {
  console.log(6)
  let cars = STORE.State.cars
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  cars.forEach(c => template += c.Template)
  document.getElementById('product').innerHTML = template
}

function _drawForm(){
  let cars = STORE.State.cars
  let template = `
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
  document.getElementById('form').innerHTML = template
}

//Public
export default class CarsController {
  constructor() {
    console.log(5)
    _drawCars();
    _drawForm()
  }

  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    debugger
    carsService.createCar(rawCar)
    _drawCars();
    _drawForm();
  }

  removeCar(id) {
    debugger
    console.log('hornk', id)
    carsService.removeCar(id);
    _drawCars();
  }

  bid(id) {
    carsService.bid(id);
    _drawCars();
  }

  drawPage(){
    _drawCars();
    _drawForm()
  }
}
