import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @HostBinding('style.background') colour:string | undefined;

  constructor( private element:ElementRef) { }
   @HostListener('mouseenter') mouseover(){
    this.element.nativeElement.style.color="red"
    this.colour="green"
   }


}
