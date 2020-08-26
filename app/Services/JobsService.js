import STORE from "../store.js"
import Job from "../Models/Job.js";

class JobsService{

 apply(id){
  let foundJob = STORE.State.jobs.find(j => j.id == id)

  console.log(`You applied for ${foundJob.position} at ${foundJob.company}!`);
 }

 addJob(poJob){
 let job = new Job(poJob)
 STORE.State.jobs.push(job)
 }

 removeJob(id){
  debugger
  let foundJob = STORE.State.jobs.findIndex(j => j.id == id)

  STORE.State.jobs.splice(foundJob, 1)
 }
}



const SERVICE = new JobsService

export default SERVICE

