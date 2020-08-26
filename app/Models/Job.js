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
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.jobsController.bid('${this.id}')">+ $100</button>
                  <p>$${this.pay.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }

  get formTemplate(){
    return `
    <div class="col">
                <form onsubmit="app.jobsController.createJob()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="company">Company</label>
                        <input type="text" name="company" id="company" class="form-control" placeholder="Company...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="position">Position</label>
                        <input type="text" name="position" id="position" class="form-control" placeholder="position">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="pay">Annual Pay</label>
                        <input type="number" name="pay" id="pay" class="form-control" placeholder="Annual Pay...">
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
                    <button type="submit" class="btn btn-outline-success">Add Job</button>
                </form>
            </div>
    `

  }
}