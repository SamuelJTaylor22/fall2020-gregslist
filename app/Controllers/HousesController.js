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
  let houses = STORE.State.houses
  let template = ''
  template = houses[0].formTemplate
  document.getElementById('form').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
    _drawHouses();
    _drawForm()
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
    _drawForm()
  }
}
