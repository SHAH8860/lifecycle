import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild("title") title!: ElementRef;
  public count:number=0

  constructor() { }



  ngOnInit(): void {
  }
  counter(){
    this.count++
    this.title.nativeElement.style.color = 'red';
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit",this.title)
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked has been activated")
  }

}
