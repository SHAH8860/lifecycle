import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
   subject=new Subject<number>()
   Bsubject=new BehaviorSubject<string>("Apple")
   RSubject=new ReplaySubject<string>()
   Asubject=new AsyncSubject<string>() //emit last value only when observable is completed

  constructor() { }

  ngOnInit(): void {
    this.subject.next(1)
    this.subject.next(2)
    this.subject.subscribe((res:any)=>{
      console.log("wwww")
      console.log("Subject",res)
    })
    this.subject.next(3)
    this.Bsubject.next("mango")
    this.Bsubject.next("kela")
    this.Bsubject.subscribe((res:any)=>{
      console.log("BehaviourSubject",res)
    })
    this.RSubject.next("rose")
    this.RSubject.next("lili")
    this.RSubject.next("lotus")
    this.RSubject.subscribe((res:any)=>{
      console.log('Rsubject',res)
    })
    this.Asubject.next("India")
    this.Asubject.next("china")

    this.Asubject.subscribe((res:any)=>{
      console.log("AsyncSubject",res)

    })
    this.Asubject.complete()




  }

}
