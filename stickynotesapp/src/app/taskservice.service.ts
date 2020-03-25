import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { tasks } from './tasks.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

 taskstodo:AngularFirestoreCollection<tasks>;
 tasks:Observable<tasks[]>;
 taskDoc: AngularFirestoreDocument<tasks>;
 tasksnapshot:any;
 
  constructor(private readonly af:AngularFirestore  ) {
    this.taskstodo= this.af.collection<tasks>('taskstodo');
    this.tasks=this.taskstodo.valueChanges();
    this.tasksnapshot=this.taskstodo.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as tasks;
        const id = a.payload.doc.id;
        return { id,...data };
      });
    }));
    
    //this.taskstodo=af.collection<tasks>('tasks');
    //this.tasks = this.taskstodo.valueChanges();
   }

   getTasks(){
    return this.af.collection('taskstodo').valueChanges();
  }


   addTask(taskitem:tasks) {
    //Add the new task to the collection
    //this.taskstodo.add(taskitem);
    return this.af.collection('taskstodo').add(taskitem);
  }

  updatetask(taskitem:tasks){
    delete taskitem.id;
    return this.af.doc('taskstodo/'+taskitem.id).update(taskitem);
  }

  deleteTask(taskitem:string) {
    //Get the task id
    this.af.doc('taskstodo/'+taskitem).delete();
    //Delete the document
   } 
 
}
