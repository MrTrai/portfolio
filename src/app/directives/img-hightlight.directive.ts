import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appImgHightlight]'
})
export class ImgHightlightDirective {
  @Input() private enter: any;
  @Input() private leave: any;

  constructor(public elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  mouseover() {

    for (const key in this.enter) {
      this.renderer.setStyle(this.elementRef.nativeElement, key, this.enter[key]);
    }

  }

  @HostListener('mouseout')
  mouseout() {
    for (const key in this.leave) {
      this.renderer.setStyle(this.elementRef.nativeElement, key, this.leave[key]);
    }
  }
}
