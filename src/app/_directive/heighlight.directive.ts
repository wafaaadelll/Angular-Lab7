import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.ele.nativeElement.style.background = "rgb(255, 229, 194)";
  }
  @HostListener('mouseleave') onMouseOut() {
    this.ele.nativeElement.style.background = "transparent";
  }
  constructor(private ele: ElementRef) { }

}
