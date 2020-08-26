import housesService from "../Services/housesService.js";
import STORE from "../store.js";
// private
function _drawHouses() {
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(c => template += c.Template)
  document.getElementById('product').innerHTML = template
}

function _drawForm(){
  let template = `
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
  document.getElementById('form').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      bed: parseInt(form.bed.value),
      // @ts-ignore
      bath: parseInt(form.bath.value),
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    housesService.createHouse(rawHouse)
    _drawHouses();
    _drawForm();
  }

  removeHouse(id) {
    // debugger
    console.log('hornk', id)
    housesService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    housesService.bid(id);
    _drawHouses();
  }

  drawPage(){
    _drawHouses();
    _drawForm();
    document.getElementById("homes").setAttribute("class", "nav-link active")
    document.getElementById("jobs").setAttribute("class", "nav-link")
    document.getElementById("cars").setAttribute("class", "nav-link")
  }
}
