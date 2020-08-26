import STORE from "../store.js"
import jobsService from "../Services/JobsService.js"


function _drawJobs(){
  let template = ''
  STORE.State.jobs.forEach(j => template += j.Template)
  document.getElementById("product").innerHTML = template
}

function _drawForm(){
  let template = `
  <div class="col">
              <form onsubmit="app.jobsController.addJob()" class="form-inline">
                  <div class="form-group p-1">
                      <label class="mr-1" for="company">Company</label>
                      <input type="text" name="company" id="company" class="form-control" placeholder="Company...">
                  </div>
                  <div class="form-group p-1">
                      <label class="mr-1" for="position">Position</label>
                      <input type="text" name="position" id="position" class="form-control" placeholder="Position...">
                  </div>
                  <div class="form-group p-1">
                      <label class="mr-1" for="pay">Annual Pay</label>
                      <input type="number" name="pay" id="pay" class="form-control" placeholder="Pay..."
                          step= ".01">
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
                  <button type="submit" class="btn btn-outline-success">Create Job</button>
              </form>
          </div>
  `
  document.getElementById("form").innerHTML = template
}

export default class JobsController{

 constructor(){

  _drawForm();
  _drawJobs()
 }

 drawPage(){
  _drawJobs();
  _drawForm();
  document.getElementById("jobs").setAttribute("class", "nav-link active")
  document.getElementById("homes").setAttribute("class", "nav-link")
  document.getElementById("cars").setAttribute("class", "nav-link")
 }

 addJob(){
  event.preventDefault();
  let form = event.target
  let poJob = 
  {
    // @ts-ignore
    company: form.company.value,
    // @ts-ignore
    position: form.position.value,
    // @ts-ignore
    pay: parseInt(form.pay.value),
    // @ts-ignore
    description: form.description.value,
    // @ts-ignore
    img: form.img.value
  }
  jobsService.addJob(poJob)
  _drawJobs();
 }

 removeJob(id){
  jobsService.removeJob(id);
  _drawJobs();
 }

 apply(id){
  jobsService.apply(id)
 }
}