import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild("user") formvalue:NgForm | undefined
  public pnumber:number |undefined

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(form:NgForm){
    console.log(form)
    console.log("email",form.value.email)
  }

}
