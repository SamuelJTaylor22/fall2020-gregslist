import { generateId } from "../utils.js";
console.log(0)
export default class Job {
  // Object Destructuring
  constructor({ position, company, pay, img, description }) {
    this.id = generateId() 
    this.company = company
    this.position = position
    this.pay = pay
    this.img = img
    this.description = description
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.company}- ${this.position} </h4>
              <p class="card-text">Pay:$${this.pay.toFixed(2)}/Year</p>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.jobsController.apply('${this.id}')">Apply Now!</button>
              </div>
          </div>
      </div>
    </div>`
  }

}