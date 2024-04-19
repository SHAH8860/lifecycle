import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
   subject=new Subject<number>()//Subject can emit multiple items to its observers
   Bsubject=new BehaviorSubject<string>("Apple")//have previous memory and take initial value
   RSubject=new ReplaySubject<string>() //can store multiple value
   Asubject=new AsyncSubject<string>() //emit last value only when observable is completed


  constructor() { }

  ngOnInit(): void {
    console.log("sub",this.Bsubject)
    this.subject.next(1)
    this.subject.next(2)//1 and 2 will be not print becaose subject donaot have previous memory
    this.subject.subscribe((res:any)=>{
      console.log("wwww")
      console.log("Subject",res)
    })
    this.subject.next(3)
    this.subject.next(4)
    this.subject.next(44)

    this.Bsubject.next("mango")
    this.Bsubject.next("kela")

    this.Bsubject.subscribe((res:any)=>{
      console.log("BehaviourSubject",res)
    })
    this.Bsubject.next("Anar")
    this.Bsubject.next("laddo")
    this.RSubject.next("rose")
    this.RSubject.next("lili")
    this.RSubject.next("lotus")
    this.RSubject.subscribe((res:any)=>{
      console.log('Rsubject',res)
    })
    this.RSubject.next("sunflower")
    this.Asubject.next("India")
    this.Asubject.next("china")

    this.Asubject.subscribe((res:any)=>{
      console.log("AsyncSubject",res)

    })
    this.Asubject.next("Bihar")
    this.Asubject.complete()
    // async subject emit only last value when it is completed
    // It will not emit any values until the subject’s complete() method is called. When completed, it will emit the last value (if any) to subscribers.




  }


}
