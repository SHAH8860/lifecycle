import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public input:FormGroup|any;
  userarray:any=[]
  constructor( private fb:FormBuilder) {
    this.input=this.fb.group({
      user:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  userdata(){
    let payload={
      id:(Math.random()*10),
      user:this.input.value.user
    }
    this,this.userarray.push(payload)
    this.input.reset()

  }
  deleteuser(id:any){
    let a=this.userarray.indexOf(id)
    this.userarray.splice(a,1)
    // return this.userarray
  }

 Editvalue(data:any){
  this.input.get("user")?.setValue(data.user)
 }
 update(id:any){
  let data=this.userarray.find((ele:any)=>{ele.id=id})
  data.user=this.input.vlaue.user
 }

}
