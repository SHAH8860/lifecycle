import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-init',
  templateUrl: './after-init.component.html',
  styleUrls: ['./after-init.component.css']
})
export class AfterInitComponent implements OnInit,AfterContentInit,AfterContentChecked {

  constructor() { }



  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log("Content has been Initialize,")
  }
  ngAfterContentChecked(): void {
    console.log("Content has been changed")
  }

}
