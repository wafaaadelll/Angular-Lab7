import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatele]'
})
export class RepeateleDirective {
  @Input() appRepeatele: number = 0;
  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (let i = 0; i < this.appRepeatele; i++) {
      this.view.createEmbeddedView(this.template, { index: i })

    }
  }
}
