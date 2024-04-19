import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm:FormGroup|any

  constructor( private fb:FormBuilder) {
    this.userForm=this.fb.group({
      name:["",Validators.required],
      about:["",Validators.required]

    })
   }
   

  ngOnInit(): void {
  }
  FormSubmit(){
    console.log(this.userForm)
    console.log(this.userForm.value.name)
    console.log(this.userForm.value.name)
  }

}
