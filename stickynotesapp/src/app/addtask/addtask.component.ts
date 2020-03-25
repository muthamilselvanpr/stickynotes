import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  visible = true;
  selectable = true;
importance="";
  addOnBlur = true;
  myForm: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      description: ['', [Validators.required]],
      importance: [''],
      duedate: ['', [Validators.required]]
    })
  }

  /* Date */
    date(e) {
      var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
      this.myForm.get('duedate').setValue(convertDate, {
        onlyself: true
      })
    }
/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.myForm.controls[control].hasError(error);
}
  submitForm() {
    console.log(this.myForm.value)
  }

}
