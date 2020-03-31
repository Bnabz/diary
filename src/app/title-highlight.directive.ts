import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleHighlight]'
})
export class TitleHighlightDirective {

  constructor(private el:ElementRef) {
   this.el.nativeElement.style.color='blue';
  }

}
