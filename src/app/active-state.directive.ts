import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveState]',
  standalone: true
})
export class ActiveStateDirective implements OnInit {
  @Input() appActiveState: boolean = false;
  @Input() activeClass: string = 'active';
  @Input() disabledClass: string = 'disabled';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateState();
  }

  ngOnChanges() {
    this.updateState();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (!this.appActiveState) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private updateState() {
    if (this.appActiveState) {
      this.renderer.addClass(this.el.nativeElement, this.activeClass);
      this.renderer.removeClass(this.el.nativeElement, this.disabledClass);
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.activeClass);
      this.renderer.addClass(this.el.nativeElement, this.disabledClass);
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    }
  }
}