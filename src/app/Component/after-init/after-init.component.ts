import { AfterContentChecked, AfterContentInit, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-after-init',
  templateUrl: './after-init.component.html',
  styleUrls: ['./after-init.component.css']
})
export class AfterInitComponent implements OnInit,AfterContentInit,AfterContentChecked {
  @Input() child:string | undefined
  @Output() parent:EventEmitter<any>=new EventEmitter()

  constructor() { }



  ngOnInit(): void {
    this.parent.emit("Hello Papa")
  }
  ngAfterContentInit(): void {
    console.log("Content has been Initialize,")
  }
  ngAfterContentChecked(): void {
    console.log("Content has been changed")
  }


}
