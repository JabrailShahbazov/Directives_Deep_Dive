import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highLightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2, private eltRef: ElementRef) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eltRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.eltRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.eltRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }

}
