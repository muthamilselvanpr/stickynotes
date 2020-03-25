import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks.model';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { TaskserviceService } from '../taskservice.service';
@Component({
  selector: 'app-taskscards',
  templateUrl: './taskscards.component.html',
  styleUrls: ['./taskscards.component.scss']
})
export class TaskscardsComponent implements OnInit {

taskitems:Observable<any>;
taskDoc: AngularFirestoreDocument<tasks>;
tasksnapshot:any;


constructor(private serviceobj:TaskserviceService ) {
    
  //console.log(this.tasksnapshot);
  //this.taskstodo=af.collection<tasks>('tasks');
  //this.tasks = this.taskstodo.valueChanges();
 }

 warn(text:string)
 {
   if(text=="low")
   {
     return "bg-success"
   }
 }

 getTasks(){
   this.taskitems= this.serviceobj.getTasks();
 }

ngOnInit(): void {
  this.getTasks();
  }

  deleteTask(task) {
    //Get the task id
    let taskId = task.id;
    //delete the task
    this.serviceobj.deleteTask(taskId);
 } //deleteTask
}
