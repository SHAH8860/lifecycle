import { AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AfterInitComponent } from '../after-init/after-init.component';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild("title") title!: ElementRef;
  @ViewChild('app-after-init') child:AfterInitComponent | undefined
  public count:number=0
  public data="hello"
  public text=2

  constructor(private auth:AuthService) { }



  ngOnInit(): void {
    this.auth.getdata().subscribe((res:any)=>{
      console.log( "res==",res.photos)
    })
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
 handle(event:any){
    console.log(event)


  }


}
