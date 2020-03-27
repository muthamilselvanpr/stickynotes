import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { tasks } from './tasks.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

 taskstodo:AngularFirestoreCollection<tasks>;
 tasks:Observable<tasks[]>;
 taskDoc: AngularFirestoreDocument<tasks>;
 taskarray:tasks[];
 
  constructor(private readonly af:AngularFirestore  ) {
    this.taskstodo= this.af.collection<tasks>('taskstodo');
    this.tasks=this.taskstodo.valueChanges();
    this.tasks=this.taskstodo.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as tasks;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    //this.taskstodo=af.collection<tasks>('tasks');
    //this.tasks = this.taskstodo.valueChanges();
   }

   getTasks(){
    return this.tasks;
  }


   addTask(taskitem:tasks) {
    //Add the new task to the collection
    //this.taskstodo.add(taskitem);
    taskitem.duedate=new Date(taskitem.duedate);
    this.taskstodo.add(taskitem);
  }

  updatetask(taskitem:tasks){
    delete taskitem.id;
    return this.af.doc('taskstodo/'+taskitem.id).update(taskitem);
  }

  deleteTask(taskitem:tasks) {
    //Get the task id
    this.af.doc('taskstodo/'+taskitem.id).delete();
    //Delete the document
   } 
 
}
